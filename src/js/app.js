/* eslint-disable no-console */
/* eslint-disable use-isnan */
/* eslint-disable consistent-return */
// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

// export default function checkCount(count) {
//   try {
//     if (Number(count) !== NaN) {
//       return Number(count);
//     }
//   } catch (e) {
//     console.log(`${count} не является числом`);
//   }
// }

export default function checkCount(count) {
  if (Number.isNaN(parseInt(count, 10)) || parseInt(count, 10) === 0) {
    throw new Error(`${count} не является числом`);
  }
  return parseInt(count, 10);
}
