const weight = 100;
const height = 1.77;
const BMI = weight / height ** 2;

// if (BMI < 18.5) {
//     console.log("You are underweight");
// }
// else if (BMI >= 18.5 && BMI < 25){
//     console.log("You are normal");
// }
// else if (BMI >= 25 && BMI < 30) {
//     console.log("You are overweight");

// }
// else {
//     console.log("You are obese");
// }

let str = BMI < 18.5 ? "You are underweight": BMI >= 18.5 && BMI < 25 ? "You are normal": BMI >= 25 && BMI < 30? "You are over weight" : "You are obese";

console.log(str);