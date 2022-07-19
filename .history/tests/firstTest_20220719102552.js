fixture('First Fixture')
        .page('https://devexpress.github.io/testcafe/example/')

test('First Test', async t => {
    await t.typeText('#developer-name', 'Azzam Nizar')
        .click('#macos')
        .click('#submit-button');
});

test('Second Test', async t => {
    
});

test('Third Test', )