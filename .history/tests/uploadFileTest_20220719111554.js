import { Selector } from "testcafe";

const inputFileUpload = Selector('input#flie-upload');
const uploadFileButton = Selector('input#file-submit.button')

fixture('Upload File Example')
    .page('https://the-internet.herokuapp.com/upload')

test('Upload test', async t => {
    await t.setFilesToUpload(inputFileUpload, '../../resources/images/data-test.jpg')
            .click(uploadFileButton);
}); 