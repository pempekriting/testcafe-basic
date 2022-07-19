import { Selector, ClientFunction } from "testcafe";

const testCafeSelect = Selector('select#preferred-interface');
const testCafeSelectOptions = testCafeSelect.find('option');

const getPageUrl = ClientFunction(() => window.location.href); 

fixture('Dropdown Example')
    .page('https://devexpress.github.io/testcafe/example/')

test('Select options', async t => {
    await t.click(testCafeSelect)
            .click(testCafeSelectOptions.withExactText('Command Line'))
});