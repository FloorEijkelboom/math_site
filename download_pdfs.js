const puppeteer = require('puppeteer'); // Make sure this isn't puppeteer-core

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new' // Address the warning
  });

  const page = await browser.newPage();

  // List of URLs to be downloaded as PDFs
  const urls = [
    'http://127.0.0.1:4000/docs/essentials/dot_product.html',
    // Add more URLs here
  ];

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Adjust any additional wait time if needed for dynamic content to load
    await page.waitForTimeout(1000);

    // Save the page as PDF
    const pdfPath = url.replace(/[^a-zA-Z0-9]/g, '_') + '.pdf';
    await page.pdf({ path: pdfPath, format: 'A4' });

    console.log(`Page saved as PDF: ${pdfPath}`);
  }

  await browser.close();
})();
