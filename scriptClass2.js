// scriptClass2.js

const initializeWebDriver = require('./driver')
const { By, Select } = require('selenium-webdriver');


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
    }

    async passwordInput() {
        await this.driver.findElement(By.name('my-password')).sendKeys('testPassword1!');
    }

    async textAreaInput() {
        await this.driver.findElement(By.name('my-textarea')).sendKeys('Test text for the text area. 123 !@#');
    }

    async dropdownSelect() {
        await this.driver.findElement(By.name('my-select')).click();
        await this.driver.findElement(By.xpath('/html/body/main/div/form/div/div[2]/label[1]/select/option[2]')).click();
    }

    async dropdownSelectDatalist() {
        const datalistInput = await this.driver.findElement(By.name('my-datalist'));
        // await this.driver.executeScript("arguments[0].value = 'Chi';", datalistInput);
        await this.driver.executeScript("arguments[0].dblclick();", datalistInput);
        // await datalistInput.click();
        // await parentElement.click();
        // await datalistInput.sendKeys('Chi');
        await this.driver.sleep(2000);
        await this.driver.findElement(By.xpath("//datalist[@id='my-datalist']/option[text()='Chicago']")).click();
    }

    async checkedCheckbox() {
        await this.driver.findElement(By.id('my-check-1')).click();
    }

    async closeWebDriver() {
        if (this.driver) {
            await this.driver.quit();
            console.log("WebDriver closed successfully");
        }
    }
}

module.exports = ScriptClass2;
