/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const ticketPrice = 800;
let priceForYou;

if(age < 10) {
    priceForYou = "Free";
}else if (age >= 10 && age < 60) {
    let isStudent = true;
    if (age > 30) {
        isStudent = !true;
    }
    if (isStudent) {
        priceForYou = ticketPrice - ticketPrice * 50 / 100; 
    }
    else{
        priceForYou = ticketPrice;
    }
}
else if (age >= 60) {
    priceForYou = ticketPrice - ticketPrice * 15 / 100;
}

else{
    priceForYou = ticketPrice;
}

console.log("Ticket fair for you:", priceForYou);