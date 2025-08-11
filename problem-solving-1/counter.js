function counter(text, letter){
    let count = 0;
    for(const char of text){
        if(char === letter){
            count++;
        }
    }
    return count;
}

const text = "I am learning Javascript!";
const letter = "a";
const count = counter(text, letter);
console.log(count);