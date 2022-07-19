import Selector from 'testcafe';

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture('iFrame Example')
    .page('http://www.the-internet.herokuapp.com/iframe')

test('iFrame test', async t => {
    await t.switchToIframe(iframeName)
});