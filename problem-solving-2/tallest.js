const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let maxNumber = numbers[0];
    for(const num of numbers){
        if(num > maxNumber){
            maxNumber = num;
        }
    }
    return maxNumber;
}

function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min) {
            min = number;
        }
    }
    return min;
}

const max = getMax(heights);
const min = getMin(heights);
console.log("max value is", max);
console.log("min value is", min);
