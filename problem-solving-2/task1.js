const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers){
    if(!Array.isArray(numbers)){
        return "Please provide an array!"
    }
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const min = lowestNumber(heights2);
console.log(min);