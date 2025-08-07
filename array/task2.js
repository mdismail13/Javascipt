const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

// Solution 1:

// for(let number of numbers) {
//     if(number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// }
// console.log(evenNumbers);


// Solution 2:

// for(let number = 0 ; number < numbers.length ; number++) {
//     if(numbers[number] % 2 === 0) {
//         evenNumbers.push(numbers[number]);
//     }
// }
// console.log(evenNumbers);

// Solution 3:

// for(let number = numbers.length - 1 ; number >= 0 ; number--) {
//     if(numbers[number] % 2 === 0) {
//         evenNumbers.unshift(numbers[number]);
//     }
// }
// console.log(evenNumbers);

// Solution 4:

// let number = 0;

// while(number < numbers.length) {
//     if(numbers[number] % 2 === 0) {
//         evenNumbers.push(numbers[number]);
//     }
//     number++;
// }
// console.log(evenNumbers);

// Solution 5:

// let number = numbers.length - 1;

// while(number >= 0) {
//     if(numbers[number] % 2 === 0) {
//         evenNumbers.unshift(numbers[number]);
//     }
//     number --;
// }
// console.log(evenNumbers);