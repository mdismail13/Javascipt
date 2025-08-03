/*
####  VARIABLE IS NOTHING BUT A CONTAINER ####
*/
// Three basic type of variable is given below

// number
var sunglassPrice = 450;

// string
var name = "Ismail";

// boolean
var isPassed = true;

// NAMING CONVENTION
// 1. single word
// 2. no quote
// 3. no gap or hyphen
// 4. can't start with a number
// 5. can't be a keyword
// 6. camel case is standard

var lastExamScore = 60;

//shorthand(+=, -=, /=, *=, %=)

/*Operator
1. Arithmetic(addition, subtraction, multiplication, division, modulus, exponential etc.)
2. Assignment(=)
3. Comparison(isGreaterThan(>), isLessThan(<), isEqualTo(==(only check the value)/===(check value and type both)), isNotEqualTo(!=/!==), isGreaterThanOrEqualTo(<=), isLessThanOrEqualTo(<=))
4. Logical(and &&, or ||)*/

/*isNaN--> check the value if number or not. NaN means not a number.
if the value is number it returns false. If the value is not a number,
isNan try to convert the value to a number. If the value converts to a number,
it returns false. If it's not, it returns true.*/

// null

var number = null;
console.log(number);
console.log(typeof number);

// Number()

var a = "25";
var b = "20.2521"
var c = "abc";

console.log(typeof Number(a));
console.log(typeof Number(b));
console.log(typeof Number(c));