// scriptClass2.js

const initializeWebDriver = require('./driver')
const { By, Select, until } = require('selenium-webdriver');
const { Actions } = require('selenium-webdriver/lib/input');


class ScriptClass2 {
    constructor() {
        this.driver = null;
    }

    async initialize() {
        try {
            this.driver = await initializeWebDriver();
            console.log("WebDriver initialized successfully");
        } catch (error) {
            console.error("Error initializing WebDriver:", error.message);
            throw error; // Rethrow the error for further analysis
        }
    }

    async navigateTo(url) {
        if (!this.driver) {
            await this.initialize();
        }

        try {
            await this.driver.get(url);
        } catch (error) {
            console.error("Error navigating to the URL:", error.message);
            throw error; // Rethrow the error for further analysis
        }
    }

    async textInput() {
        await this.driver.findElement(By.id('my-text-id')).sendKeys('Test Text');
        console.log('Text input passed!');
    }

    async passwordInput() {
        await this.driver.findElement(By.name('my-password')).sendKeys('testPassword1!');
        console.log('Password input passed!');
    }

    async textAreaInput() {
        await this.driver.findElement(By.name('my-textarea')).sendKeys('Test text for the text area. 123 !@#');
        console.log('Text Area input passed!');
    }

    async returnToIndex() {
        await this.driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        await this.driver.findElement(By.linkText('Return to index')).click();
        await this.driver.wait(until.urlContains('/index.html'), 10000);
        const currentUrl = await this.driver.getCurrentUrl();
        if (currentUrl.includes('/index.html')) {
            console.log('The user is redirected to a new page.');
            await this.driver.navigate().back();
        } else {
            console.log('The user is NOT redirected to a new page.');
        }
    }

    async dropdownSelect() {
        await this.driver.findElement(By.name('my-select')).click();
        await this.driver.findElement(By.xpath('/html/body/main/div/form/div/div[2]/label[1]/select/option[2]')).click();
        console.log('Dropdown select passed!');
    }

    async dropdownSelectDatalist() {
        const datalistInput = await this.driver.findElement(By.name('my-datalist')).click();
        // await this.driver.executeScript("arguments[0].value = 'Chi';", datalistInput);
        // await datalistInput.click();
        // await parentElement.click();
        // await datalistInput.sendKeys('Chi');
        const actions = new Actions(this.driver);
        await actions.doubleClick(datalistInput).perform();
        await this.driver.sleep(2000);
        await this.driver.findElement(By.xpath("//datalist[@id='my-datalist']/option[text()='Chicago']")).click();
    }

    async checkedCheckbox() {
        await this.driver.findElement(By.id('my-check-1')).click();
        console.log('Unchecking a checked box passed!');
    }

    async defaultCheckbox() {
        await this.driver.findElement(By.id('my-check-2')).click();
        console.log('Checking a unchecked box passed!');
    }

    async checkedRadio() {
        await this.driver.findElement(By.id('my-radio-1')).click();
        console.log('Unchecking a checked radio passed!');
    }

    async defaultRadio() {
        await this.driver.findElement(By.id('my-radio-2')).click();
        console.log('Checking a unchecked radio passed!');
    }

    async closeWebDriver() {
        if (this.driver) {
            await this.driver.quit();
            console.log("WebDriver closed successfully");
        }
    }
}

module.exports = ScriptClass2;
