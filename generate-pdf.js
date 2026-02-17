import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';

async function generatePDF() {
     console.log('Starting local server...');
     const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
          cwd: process.cwd(),
          detached: true,
          stdio: 'ignore', // or 'pipe' if we want to debug
          shell: true
     });

     // Give server time to start
     await new Promise(resolve => setTimeout(resolve, 5000));

     try {
          console.log('Launching browser...');
          const browser = await puppeteer.launch({
               headless: true,
               args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

          const page = await browser.newPage();

          // Set viewport to Full HD
          await page.setViewport({ width: 1920, height: 1080 });

          console.log('Navigating to page...');
          await page.goto('http://localhost:4173/geekinko-deck/', { waitUntil: 'networkidle0' });

          console.log('Generating PDF...');
          await page.pdf({
               path: 'geekinko_investor_deck.pdf',
               width: '1920px',
               height: '1080px',
               printBackground: true,
               pageRanges: '1-17' // Ensure we get all slides if possible
          });

          console.log('PDF generated successfully: geekinko_investor_deck.pdf');
          await browser.close();
     } catch (error) {
          console.error('Error generating PDF:', error);
     } finally {
          console.log('Stopping server...');
          try {
               if (server.pid) {
                    process.kill(-server.pid); // Kill process group
               } else {
                    server.kill();
               }
          } catch (e) {
               console.log('Server already stopped or could not kill.');
          }
          process.exit();
     }
}

generatePDF();
