import { Selector } from "testcafe";

const inputFileUpload = Selector('input#flie-upload');

fixture('Upload File Example').page('')

test('Upload test', async t => {
    await t;
}); 