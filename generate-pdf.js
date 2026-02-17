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

          // Force screen media type so @media print styles DON'T apply
          await page.emulateMediaType('screen');

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

          // Create the PDF document
          const pdfDoc = await PDFDocument.create();

          // Width/height in PDF points (72 points = 1 inch)
          // 1920x1080 pixels at 72 DPI
          const pageWidth = 1920;
          const pageHeight = 1080;

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

               // Take a SCREENSHOT (uses screen media, not print!)
               const screenshotBuffer = await page.screenshot({
                    type: 'png',
                    clip: { x: 0, y: 0, width: 1920, height: 1080 }
               });

               // Embed the PNG into the PDF
               const pngImage = await pdfDoc.embedPng(screenshotBuffer);
               const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);
               pdfPage.drawImage(pngImage, {
                    x: 0,
                    y: 0,
                    width: pageWidth,
                    height: pageHeight,
               });
          }

          // Save the merged PDF
          const pdfBytes = await pdfDoc.save();
          const outputPath = path.join(process.cwd(), 'public', 'geekinko_investor_deck.pdf');
          fs.writeFileSync(outputPath, pdfBytes);

          const sizeMB = (pdfBytes.length / 1024 / 1024).toFixed(2);
          console.log(`PDF generated: ${outputPath}`);
          console.log(`Total pages: ${totalSlides}, Size: ${sizeMB} MB`);

          await browser.close();
     } catch (error) {
          console.error('Error generating PDF:', error);
     } finally {
          console.log('Stopping server...');
          try { process.kill(-server.pid); } catch (e) {
               try { server.kill(); } catch (e2) { /* ignore */ }
          }
          process.exit(0);
     }
}

generatePDF();
