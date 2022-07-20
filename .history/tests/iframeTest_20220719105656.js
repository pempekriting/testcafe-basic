import Selector from 'testcafe';

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('#tinymce');

fixture('iFrame Example')
    .page('http://www.the-internet.herokuapp.com/iframe')

test('iFrame test', async t => {

});