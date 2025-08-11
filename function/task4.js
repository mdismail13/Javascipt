function count_zero(binaryString){
    let count = 0;
    for(const i of binaryString){
        if(i ==="0"){
            count++;
        }
    }
    return count;
}

const binaryString = "10101101";
const result = count_zero(binaryString);
console.log(result);