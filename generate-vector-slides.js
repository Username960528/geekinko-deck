import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

async function generateVectorSlides() {
     const outputDir = path.join(process.cwd(), 'public', 'slides_vector');
     if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

     console.log('Building project...');
     const build = spawn('npm', ['run', 'build'], {
          cwd: process.cwd(),
          shell: true,
          stdio: 'inherit'
     });

     await new Promise((resolve, reject) => {
          build.on('close', (code) => {
               if (code === 0) resolve();
               else reject(new Error(`Build failed with code ${code}`));
          });
     });

     console.log('Starting preview server...');
     const server = spawn('npx', ['vite', 'preview', '--port', '4174'], {
          cwd: process.cwd(),
          detached: true,
          stdio: 'ignore',
          shell: true
     });

     await new Promise(resolve => setTimeout(resolve, 3000));

     try {
          console.log('Launching browser...');
          const browser = await puppeteer.launch({
               headless: 'new',
               args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

          const page = await browser.newPage();
          await page.setViewport({ width: 1920, height: 1080 });

          console.log('Navigating to page...');
          await page.goto('http://localhost:4174/geekinko-deck/', {
               waitUntil: 'networkidle0',
               timeout: 30000
          });

          await page.evaluate(() => document.fonts.ready);
          await new Promise(resolve => setTimeout(resolve, 2000));

          const totalSlides = await page.evaluate(() => {
               return document.querySelectorAll('[data-index]').length;
          });
          console.log(`Found ${totalSlides} slides`);

          for (let i = 0; i < totalSlides; i++) {
               console.log(`Generating vector PDF for slide ${i + 1}/${totalSlides}...`);

               if (i > 0) {
                    await page.evaluate(() => {
                         const btns = document.querySelectorAll('button');
                         btns.forEach(btn => {
                              if (btn.textContent.includes('NEXT')) btn.click();
                         });
                    });
                    await new Promise(resolve => setTimeout(resolve, 800));
               }

               // Inject CSS overrides BEFORE pdf() to fix print media rendering:
               // - Force only the current slide visible
               // - Override @media print rules so layout doesn't break
               await page.evaluate((slideIndex) => {
                    // Remove any previous override style
                    const old = document.getElementById('pdf-override');
                    if (old) old.remove();

                    const style = document.createElement('style');
                    style.id = 'pdf-override';
                    style.textContent = `
          @media print {
            html, body, #root, #app-root {
              background-color: #050505 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              overflow: hidden !important;
              width: 1920px !important;
              height: 1080px !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            #deck-container {
              position: relative !important;
              width: 1920px !important;
              height: 1080px !important;
              overflow: hidden !important;
            }
            .slide {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 1920px !important;
              height: 1080px !important;
              opacity: 0 !important;
              display: none !important;
              page-break-after: auto !important;
            }
            .slide[data-index="${slideIndex}"] {
              opacity: 1 !important;
              display: flex !important;
              z-index: 100 !important;
            }
            .scanlines, .noise, .ambient-glow {
              position: fixed !important;
              z-index: 1 !important;
            }
            .fixed {
              position: fixed !important;
              z-index: 50 !important;
            }
            button, .cyber-btn { display: none !important; }
          }
        `;
                    document.head.appendChild(style);
               }, i);

               // Generate vector PDF for this single slide
               const slideNum = String(i + 1).padStart(2, '0');
               await page.pdf({
                    path: path.join(outputDir, `slide_${slideNum}.pdf`),
                    width: '1920px',
                    height: '1080px',
                    printBackground: true,
                    preferCSSPageSize: false,
                    pageRanges: '1'
               });
          }

          // Clean up injected style
          await page.evaluate(() => {
               const old = document.getElementById('pdf-override');
               if (old) old.remove();
          });

          console.log(`\nDone! ${totalSlides} vector PDF slides saved to: ${outputDir}`);
          console.log('These files can be opened and edited in Adobe Illustrator.');

          await browser.close();
     } catch (error) {
          console.error('Error:', error);
     } finally {
          console.log('Stopping server...');
          try { process.kill(-server.pid); } catch (e) {
               try { server.kill(); } catch (e2) { /* ignore */ }
          }
          process.exit(0);
     }
}

generateVectorSlides();
