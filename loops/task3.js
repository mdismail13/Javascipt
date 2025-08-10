// Display sum of all the odd numbers from 81 to 131.

let n = 81;
let oddSum = 0;
while(n <= 131) {
    if(n % 2 === 1) {
        oddSum += n;
    }
    n++;
}
console.log(oddSum);

// Display sum of all the even numbers from 206 to 311.

let i = 206;
let evenSum = 0;
while(i <= 311) {
    if(i % 2 === 0) {
        evenSum += i;
    }
    i++;
}
console.log(evenSum);