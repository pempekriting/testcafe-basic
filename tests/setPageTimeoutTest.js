fixture('Set Page Timeout Example')
    .page('https://devexpress.github.io/testcafe/')


test('Set page timeout test', async t => {
    await t
        .setPageLoadTimeout(0)
        .navigateTo('http://www.facebook.com')
});