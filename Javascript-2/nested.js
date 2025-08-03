const age = 60;
const isStudent = true;
const isMan = true;
const isRetiredPerson = true;
let ticketPrice = 100;

// if(age < 10) {
//     ticketPrice = 0;
//     console.log("Ticket Price:", ticketPrice);
// }
// else if(age >= 10 && age < 30) {
//     if(isStudent) {
//         ticketPrice -= ticketPrice * 50 / 100;
//         console.log("Ticket Price:", ticketPrice);
//     }
//     else{
//         console.log("Ticket Price:", ticketPrice);
//     }
// }
// else if(age >= 60){
//     if(isMan) {
//         if(isRetiredPerson) {
//             ticketPrice = 0;
//             console.log("Ticket Price:", ticketPrice);
//         }
//         else{
//             ticketPrice -= ticketPrice * 80 / 100;
//             console.log("Ticket Price:", ticketPrice);
//         }
//     }
//     else {
//         ticketPrice = 0;
//         console.log("Ticket Price:", ticketPrice)
//     }
// }
// else {
//     console.log("Ticket Price:", ticketPrice);
// }

ticketPrice = age < 10 ? 0 
: age >= 10 && age < 30 ? isStudent?  ticketPrice - ticketPrice * 50 / 100 : ticketPrice : age >= 60 ? isMan ? isRetiredPerson ? 0 : ticketPrice - ticketPrice * 80 / 100 : 0 : ticketPrice