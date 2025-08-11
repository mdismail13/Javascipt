// function averageOdd(numbers){
//     const oddNumbers = [];
//     for(const i of numbers){
//         if(i % 2 !== 0) {
//             oddNumbers.push(i);
//         }
//     }
//     let sum = 0;
//     for(const i of oddNumbers){
//         sum += i;
//     }
//     const average = sum / oddNumbers.length;
//     return average;
// }

function averageOdd(numbers){
    let sum = 0;
    let length = 0;
    for(const number of numbers){
        if(number % 2 !== 0){
            sum += number;
            length++;
        }
    }
    const average = sum / length;
    return average;
}
const numbers = [12, 5, 8, 19, 3, 7, 14, 22, 10, 6, 1, 17];
const average = averageOdd(numbers);
console.log(Number(average.toFixed(2)));