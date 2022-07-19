import { Selector } from "testcafe";

const inpDeveloperName = Selector('#developer-name');
const macOsOption = Selector('#macos');
const submitButton = Selector('#submit-button')

fixture('First Fixture')
        .page('https://devexpress.github.io/testcafe/')

test
    .page('https://devexpress.github.io/testcafe/example/')
    ('First Test', async t => {
    await t
        .expect(inpDeveloperName.value).eql('', 'Input is empty')
        .typeText(inpDeveloperName, 'Azzam Nizar')
        .expect(inpDeveloperName.value).contains('Azzam')
        .click(macOsOption)
        .click(submitButton);
}); 