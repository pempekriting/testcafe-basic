import { Selector } from "testcafe";

const testCafeSelect = Selector('select#preferred-interface');
const testCafeSelectOptions = testCafeSelect.find('option');

fixture('Dropdown Example')
    .page('https://devexpress.github.io/testcafe/example/')