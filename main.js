const ScriptClass2 = require('./scriptClass2');

async function test() {
    const scriptInstance = new ScriptClass2();

    try {
        await scriptInstance.initialize();
        await scriptInstance.navigateTo("https://www.selenium.dev/selenium/web/web-form.html");
        // Perform other actions with the 'scriptInstance' as needed
        await scriptInstance.textInput();
        await scriptInstance.passwordInput();
        await scriptInstance.textAreaInput();
        await scriptInstance.dropdownSelect();
        await scriptInstance.dropdownSelectDatalist();
        await scriptInstance.checkedCheckbox();
    } catch (error) {
        // Handle errors if needed
    } finally {
        await scriptInstance.closeWebDriver();
    }
}

test();
