import { Selector } from "testcafe";

const inpDeveloperName = Selector('#developer-name');
const macOsOption = Selector('#macos');

fixture('First Fixture')
        .page('https://devexpress.github.io/testcafe/example/')

test('First Test', async t => {
    await t.typeText('#developer-name', 'Azzam Nizar')
        .click('#macos')
        .click('#submit-button');
});