const ScriptClass = require('./scriptClass');

async function test() {
    const scriptInstance = new ScriptClass();

    try {
        await scriptInstance.initialize();
        await scriptInstance.navigateTo("https://www.selenium.dev/selenium/web/web-form.html");
        // Perform other actions with the 'scriptInstance' as needed
    } catch (error) {
        // Handle errors if needed
    } finally {
        await scriptInstance.closeWebDriver();
    }
}

test();
