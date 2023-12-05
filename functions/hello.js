const puppeteer = require('puppeteer');

exports.handler = async function (event, context) {
  let browser = null;

  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    
    // Perform some Puppeteer actions

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Puppeteer function executed successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};


