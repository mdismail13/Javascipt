function inchToFeet(inch){
    const feet = parseInt(inch / 12);
    const inchRemaining = inch % 12;
    const result = feet + " feet " + inchRemaining + " inch";
    return result;
}

const inch = 68;
const feet = inchToFeet(inch);
console.log(feet)