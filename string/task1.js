function letterCounter(text, char){
    let count = 0;
    for(const letter of text.toLowerCase()){
        if(letter === char.toLowerCase()){
            count ++;
        }
    }
    return count;
}

const text = "I am learning function now. I know I can do it.";
console.log(letterCounter(text, "i"));
