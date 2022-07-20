import { Selector } from "testcafe";

const inpDeveloperName = Selector('#developer-name');
const macOsOption = Selector('#macos');
const submitButton = Selector('#submit-button')

fixture.meta('version','1')('First Fixture')
        .page('https://devexpress.github.io/testcafe/')

test.meta('env', 'production')
    .page('https://devexpress.github.io/testcafe/example/')
    ('First Test', async t => {
    await t.typeText(inpDeveloperName, 'Azzam Nizar')
        .click(macOsOption)
        .click(submitButton);
}); 

test.meta('env', 'staging')
    .page('https://devexpress.github.io/testcafe/example/')
    ('First Test', async t => {
    await t.typeText(inpDeveloperName, 'Azzam Nizar second')
        .click(macOsOption)
        .click(submitButton);
}); 