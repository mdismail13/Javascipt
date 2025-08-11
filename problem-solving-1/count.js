function counter(numbers, number){
    const num = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === number) {
            num.push(numbers[i]);
        }
    }
    const count = num.length;
    return count;
}

// function counter(numbers, number){
//     let count = 0;
//     for(const num of numbers){
//         if(num === number){
//             count++;
//         }
//     }
//     return count;
// }

const numbers = [5,6,11,12,98, 5];
console.log(counter(numbers, 5));