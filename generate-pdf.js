import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function generatePDF() {
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
     const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
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
          await page.goto('http://localhost:4173/geekinko-deck/', {
               waitUntil: 'networkidle0',
               timeout: 30000
          });

          await page.evaluate(() => document.fonts.ready);
          await new Promise(resolve => setTimeout(resolve, 2000));

          const totalSlides = await page.evaluate(() => {
               return document.querySelectorAll('[data-index]').length;
          });
          console.log(`Found ${totalSlides} slides`);

          // Create temporary directory for individual PDFs
          const tmpDir = path.join(process.cwd(), '.tmp-pdfs');
          if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

          for (let i = 0; i < totalSlides; i++) {
               console.log(`Capturing slide ${i + 1}/${totalSlides}...`);

               if (i > 0) {
                    // Click NEXT button
                    await page.evaluate(() => {
                         const btns = document.querySelectorAll('button');
                         btns.forEach(btn => {
                              if (btn.textContent.includes('NEXT')) btn.click();
                         });
                    });
                    await new Promise(resolve => setTimeout(resolve, 800));
               }

               // Generate single-page PDF for this slide
               await page.pdf({
                    path: path.join(tmpDir, `slide_${i}.pdf`),
                    width: '1920px',
                    height: '1080px',
                    printBackground: true,
                    pageRanges: '1'
               });
          }

          // Merge all PDFs
          console.log('Merging PDFs...');
          const mergedPdf = await PDFDocument.create();

          for (let i = 0; i < totalSlides; i++) {
               const pdfPath = path.join(tmpDir, `slide_${i}.pdf`);
               const pdfBytes = fs.readFileSync(pdfPath);
               const pdf = await PDFDocument.load(pdfBytes);
               const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
               copiedPages.forEach(p => mergedPdf.addPage(p));
          }

          const mergedBytes = await mergedPdf.save();
          const outputPath = path.join(process.cwd(), 'public', 'geekinko_investor_deck.pdf');
          fs.writeFileSync(outputPath, mergedBytes);
          console.log(`PDF generated successfully: ${outputPath}`);
          console.log(`Total pages: ${totalSlides}`);

          // Cleanup
          fs.rmSync(tmpDir, { recursive: true });

          await browser.close();
     } catch (error) {
          console.error('Error generating PDF:', error);
     } finally {
          console.log('Stopping server...');
          try {
               process.kill(-server.pid);
          } catch (e) {
               try { server.kill(); } catch (e2) { /* ignore */ }
          }
          process.exit(0);
     }
}

generatePDF();
