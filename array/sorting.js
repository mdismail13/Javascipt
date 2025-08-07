const numbers = [5, 7, 2, 6, 9, 4, 1, 3, 8]

// for(let num = 0 ; num < numbers.length - 1 ; num++) {
//     for(let i = 0 ; i < numbers.length - 1 - num ; i++) {
//         if(numbers[i] > numbers[i + 1]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[i+1];
//             numbers[i+1] = temp;
//         }
//     }
// }
// console.log(numbers)

// for(let num = 0 ; num < numbers.length ; num++){
//     for(let j = num + 1 ; j < numbers.length ; j++) {
//         if(numbers[j] < numbers[num]) {
//             let temp = numbers[num];
//             numbers[num] = numbers[j];
//             numbers[j] = temp;           
//         }
//     }
// } 
// console.log(numbers);

console.log(numbers);
numbers.sort();
console.log(numbers);

const age = [25, 23, 19, 15, 100, 55, 48];
console.log(age);
age.sort(function(a, b) {return a - b});
console.log(age);
age.sort(function(a, b) {return b - a})
console.log(age);

const name = ["Ismail", "Imran", "Emon", "Sumon"];
console.log(name);
name.sort();
console.log(name)