fixture.skip `Fixture 1`

test('Fixture 1 - Test 1', () => {});
test('Fixture 1 - Test 2', () => {});

fixture `Fixture 2`

test('Fixture 2 - Test 1', () => {});
test.skip('Fixture 2 - Test 2', () => {});
test('Fixture 2 - Test 3', () => {});