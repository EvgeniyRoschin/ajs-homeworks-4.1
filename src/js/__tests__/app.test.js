/* eslint-disable linebreak-style */
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

test('Number,number', () => {
  expect(() => checkCount(10.35)).toThrowError('10.35 не является числом');
});

test('Number + string', () => {
  expect(() => checkCount('10dbbg')).toThrowError('10dbbg не является числом');
});

test('Number + sumbol', () => {
  expect(() => checkCount('10!')).toThrowError('10! не является числом');
});
