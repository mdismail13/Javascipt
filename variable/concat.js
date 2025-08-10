// string + string = string

var first = "Ismail";
var last = "Hossain";
var full = first + last;
console.log(full);
console.log(typeof full); //string 

// number + string = string
var num = 25;
// var text = parseInt('abc'); this will be NaN
var text = 'abc';
console.log(num + text);
console.log(typeof (num + text));


var num1 = '30';
num1 = parseInt(num1);
console.log(num1 + text);
console.log(typeof (num1 + text));

console.log(num + num1);


//special case

var number1 = '25', number2 = "20";

console.log(number1 + number2); //2520
console.log(number1 - number2); // 5
console.log(number1 * number2); // 500
console.log(number1 / number2); //1.25