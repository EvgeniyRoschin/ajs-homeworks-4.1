import checkCount from '../app';

test('Number', () => {
  expect(checkCount(10)).toBe(10);
});

test('String Number', () => {
  expect(checkCount('10')).toBe(10);
});

test('String', () => {
  expect(() => checkCount('www')).toThrowError('www не является числом');
});
