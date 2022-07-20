import { Selector } from "testcafe";

const triedCheckbox = Selector('label').withText('I have tried TestCafe')
const slider = Selector('div#slider');
const PopulateButton = Selector('input#populate');

fixture('Drag and Hover Example')
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async t => {
        await t
                .maximizeWindow
                .setTestSpeed(0.1);
    });

test('Drag Test Case', async t => {
    await t
        .click(triedCheckbox)
        .drag(slider,360,0, {offsetX:10, offsetY:0})
}); 

test('Hover Test Case', async t => {
    await t
        .hover(PopulateButton);
});