function make_avg(numbers){
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}

const numbers = [5, 5, 10, 4];
const average = make_avg(numbers);
console.log(Number(average.toFixed(2)));