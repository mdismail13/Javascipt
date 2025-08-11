function vowelCounter(text){
    let count = 0;
    for(const char of text.toLowerCase()){
        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
            count++;
        }
    }
    return count;
}

const text = "I love yOu baby";
console.log(vowelCounter(text));