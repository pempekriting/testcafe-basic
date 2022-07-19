import Selector from 'testcafe';

const iframeName = Selector('#');

fixture('iFrame Example')
    .page('http://www.the-internet.herokuapp.com/iframe')

test('iFrame test', async t => {

});