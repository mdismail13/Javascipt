var orangePrice = 300;
var orangeQuantity = prompt("Please enter the quantity of orange: ");
var applePrice = 400;
var appleQuantity = prompt("Please enter the quantity of apple: ");
var totalPrice = (orangeQuantity * orangePrice) + (appleQuantity * applePrice);
alert("Total Amount: "+ totalPrice);
var givenAmount = prompt("Given amount: ");
var returnAmount = givenAmount - totalPrice;
alert("Return Amount: " + returnAmount);