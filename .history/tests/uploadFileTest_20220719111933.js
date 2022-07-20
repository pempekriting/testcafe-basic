import { Selector } from "testcafe";

const header = Selector('h3')
const inputFileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture('Upload File Example')
    .page('https://the-internet.herokuapp.com/upload')

test('Upload test', async t => {
    await t.setFilesToUpload(inputFileUpload, '../../resources/images/data-test.jpg')
            .click(uploadFileButton)
            .expect(header.withExactText('File Uploaded!'));

}); 