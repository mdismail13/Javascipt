// Multi level condition

// let price = 4000;

// if(price >= 5000){
//     price -= (5000 * 10/100) ;
//     console.log(price);
// }
// else if(price >= 3000){
//     price -= (3000 * 5/100);
//     console.log(price);
// }
// else{
//     price = price;
//     console.log(price);
// }


const age = 60;
const isStudent = true;
let ticketPrice = 100;

if (age < 10) {
    ticketPrice = 0;
    console.log("Ticket Price:", ticketPrice);
}
else if(age >= 10 && age < 30 && isStudent) {
    ticketPrice = ticketPrice - ticketPrice * 50 / 100;
    console.log("Ticket Price:", ticketPrice);
}
else if(age >= 60) {
    ticketPrice = ticketPrice - ticketPrice * 80 / 100;
    console.log("Ticket Price:", ticketPrice);
}
else{
    console.log("Ticket Price:", ticketPrice);
}
