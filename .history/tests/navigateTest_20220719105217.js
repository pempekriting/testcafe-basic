fixture('Navigate Example')
    .page('https://devexpress.github.io/testcafe/')


test('Navigate test', async t => {
    await t.navigateTo('https://devexpress.github.io/testcafe/example/')
});