// scriptClass2.js

const initializeWebDriver = require('./driver')

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
        await this.driver.sleep(3000);
        console.log("before find element");
        const textInput = await this.driver.findElement(By.id('my-text-id'));
        console.log("after element found");
        await this.driver.sleep(9000);
        await textInput.sendKeys('Test Text');
    }

    async checkedCheckbox() {
        await this.driver.sleep(3000);
        const checkedCheckbox = await this.driver.findElement(By.id('my-check-1')).click();
        console.log('button clicked')
        await this.driver.sleep(9000);
    }

    async closeWebDriver() {
        if (this.driver) {
            await this.driver.quit();
            console.log("WebDriver closed successfully");
        }
    }
}

module.exports = ScriptClass2;
