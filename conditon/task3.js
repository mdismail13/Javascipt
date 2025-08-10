const mark = 103;
let grade;

    // A: 90-100
    // B: 80-89
    // C: 70-79
    // D: 60-69
    // F: 0-59

// if (mark <= 100 && mark >= 90) {
//     grade = "A";
//     console.log("Your grade is:", grade);
// }
// else if (mark < 90 && mark >= 80) {
//     grade = "B";
//     console.log("Your grade is:", grade);
// }
// else if (mark < 80 && mark >= 70) {
//     grade = "C";
//     console.log("Your grade is:", grade);
// }
// else if (mark < 70 && mark >=60) {
//     grade = "D";
//     console.log("Your grade is:", grade);
// }
// else if (mark < 60 && mark >= 0) {
//     grade = "F";
//     console.log("Your grade is:", grade);
// }
// else {
//     console.log("Error, invalid mark!");
// }

grade = mark <= 100 && mark >= 90 ? "A" : mark < 90 && mark >= 80 ? "B": mark < 80 && mark >= 70 ? "C" : mark < 70 && mark >= 60? "D" : mark < 60 && mark >= 0? "F" : null;


grade ? console.log("Your grade is:", grade): console.log("Error, invalid number!");