// scriptClass.js

const initializeWebDriver = require('./driver')

class ScriptClass {
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

    async closeWebDriver() {
        if (this.driver) {
            await this.driver.quit();
            console.log("WebDriver closed successfully");
        }
    }
}

module.exports = ScriptClass;
