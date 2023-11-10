// mainScript.js

const ScriptClass = require('./scriptClass');

async function test() {
    const scriptInstance = new ScriptClass();

    try {
        await scriptInstance.initialize();
        await scriptInstance.navigateTo("https://www.espn.com");
        // Perform other actions with the 'scriptInstance' as needed
    } catch (error) {
        // Handle errors if needed
    } finally {
        await scriptInstance.closeWebDriver();
    }
}

test();
