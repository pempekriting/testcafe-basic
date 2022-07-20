import { Selector } from "testcafe";

fixture('First Fixture')
        .page('https://devexpress.github.io/testcafe/example/')

test('First Test', async t => {
    await t.typeText('#developer-name', 'Azzam Nizar')
        .click('#macos')
        .click('#submit-button');
});