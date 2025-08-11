function oddEvenChecker(number){
    if(number % 2 !== 0) {
        const value = number * 2;
        return value;
    }
    else{
        const value = number / 2;
        return value;
    }
}

const value = oddEvenChecker(16);
console.log(value);