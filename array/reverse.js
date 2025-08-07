const numbers = [10, 20, 30, 40, 50, 60, 70];

const reverseNumbers = [];

// for(let i = 0 ; i < numbers.length ; i++) {
//     reverseNumbers.unshift(numbers[i]);
// }
// console.log(numbers)
// console.log(reverseNumbers);

// for(let i=numbers.length-1;i>=0;i--){
//     reverseNumbers.push(numbers[i]);
// }

// console.log(reverseNumbers);

// let num = 0;
// while(num<numbers.length){
//     reverseNumbers.unshift(numbers[num]);
//     num++;
// }
// console.log(reverseNumbers);

// let n=numbers.length-1;
// while(n>=0){
//     reverseNumbers.push(numbers[n]);
//     n--;
// }
// console.log(reverseNumbers);

console.log(numbers);
const reversed = numbers.reverse();
console.log(reversed);
console.log(numbers);