function multiply(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please provide a number"
    }
    const result = num1 * num2;
    return result;
}

const result = multiply(5, 'seven');
console.log(result);

function fullName(firstName, lastName){
    if(typeof firstName !== "string" || typeof lastName !== "string"){
        return "Please enter a valid name!"
    }
    const name = firstName.concat(" ").concat(lastName);
    return name;
}

const name = fullName("Ismail", "Hossain");
console.log(name);

function getPrice(product){
    // if(typeof product !== 'object' || Array.isArray(product)){
    //     return "Please provide an object";
    // }
    if(!("price" in product)){
        return "product is not available."
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name: "chulkanir molom", price: 35, color: "black"})
const price = getPrice([5, 10, 15]);
console.log(price);

function getSecond(numbers){
    if(!Array.isArray(numbers)){
        return "Please provide an array"
    }
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}

const second = getSecond([1, 25, 65]);
console.log(second);