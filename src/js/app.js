// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function checkCount(count) {
  try {
    if (Number(count) !== NaN) {
      return Number(count);
    }
  } catch (e) {
    console.log(`${count} не является числом`);
  }
}
