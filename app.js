const express = require('express');
const app = express();
const port = 8000;
const puppeteer = require('puppeteer');

const google = 'https://www.google.com/search?q=';
const bing = 'https://www.bing.com/search?q=';
const duck = 'https://duckduckgo.com/?q=';
let searchTerm = 'james harden';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`${google}${searchTerm}`);
    await page.screenshot({ path: 'google.png', fullPage: true });

    await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`${bing}${searchTerm}`);
    await page.screenshot({ path: 'bing.png', fullPage: true });
  
    await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`${duck}${searchTerm}`);
    await page.screenshot({ path: 'duck.png', fullPage: true });
  
    await browser.close();
})();


// app.get('/', (req, res) => {
//     res.send("node project set up");
// });

// app.listen(port, () => console.log(`Application listening on port ${port}!`))