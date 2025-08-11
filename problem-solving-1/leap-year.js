function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

if(isLeapYear(2002)){
    console.log("Leap year");
}
else{
    console.log("Not leap year");
}
