const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();

const chromeOptions = [
    '--headless',
    '--start-maximized',
    '--incognito',
    '--disable-gpu', //Disables GPU hardware acceleration. This is often necessary when running Chrome in headless mode.
    '--disable-infobars', // Disables the "Chrome is being controlled by automated software" infobar that appears at the top of the browser.
    '--disable-extensions', //Disables the loading of extensions.
    '--no-sandbox', //Disables the Chrome sandbox for WebDriver. This may be necessary when running Chrome in a containerized environment.
    '--disable-dev-shm-usage', //Disables the use of /dev/shm for shared memory. This may be necessary when running Chrome in a containerized environment.
    '--disable-notifications', // Disables browser notifications.
    '--disable-popup-blocking', // Disables pop-up blocking.
    '--disable-logging',
];

options.addArguments(...chromeOptions); // Using the spread operator to pass array elements as separate arguments


//Add options to the chromedriver here 

let driver;

async function initializeWebDriver() {
    driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(options)
    .build();
    return driver;
}

module.exports = initializeWebDriver;
