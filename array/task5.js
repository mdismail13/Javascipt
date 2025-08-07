// How to copy an array without changing the main array

/*
const numbers = [1, 2, 3];
const copyNumbers = [1, 2, 3];
copyNumbers[0] = 99;
this will change the main array also...
*/


// Solution 1 :
// const numbers = [1, 2, 3];

// const copyNumbers = [];

// for(let number of numbers) {
//     copyNumbers.push(number);
// }

// console.log(numbers);
// console.log(copyNumbers);

// copyNumbers[0] = 99;

// console.log(numbers);
// console.log(copyNumbers);

// Solution 2 : 

// const copyNumbers = Array.from(numbers);
// copyNumbers[0] = 99;
// console.log(numbers);
// console.log(copyNumbers);

// Solution 3:

// const copyNumbers = [].concat(numbers);
// copyNumbers[0] = 99;
// console.log(numbers);
// console.log(copyNumbers);

// Solution 4:

// const copyNumbers = [...numbers];
// copyNumbers[0] = 99;
// console.log(numbers);
// console.log(copyNumbers);