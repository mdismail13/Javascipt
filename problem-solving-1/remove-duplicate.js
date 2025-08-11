function duplicateRemover(numbers){
    const newArray = [];
    for(const number of numbers){
        if(!newArray.includes(number)){
            newArray.push(number);
        }
    }
    return newArray;
}
const numbers = [5, 3, 8, 5, 9, 3, 7, 8, 2, 5, 3, 9];
const result = duplicateRemover(numbers);
console.log(result);