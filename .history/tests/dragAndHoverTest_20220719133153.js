import { Selector } from "testcafe";

const triedCheckbox = Selector('label').withText('I have tried TestCafe')
const slider = Selector('div#slider');

fixture('Drag and Hover Example')
    .page('https://devexpress.github.io/testcafe/example/')

test('Drag Test Case', async t => {
    await t
        .setTestSpeed(0.1)
        .click(triedCheckbox)
        .drag(slider,360,0, {offsetX:10, offsetY:0})
}); 