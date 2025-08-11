function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation == 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operation === "multiply"){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === "div"){
        const result = div(a, b);
        return result;
    }
    else{
        return "Please provide a valid operation";
    }
}

const result = calculator(2, 5, "div");
console.log(result);