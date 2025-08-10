function vowelChecker(text){
    text = text.toLowerCase();
    const allVowel = text.includes("a") && text.includes("e") && text.includes("i") && text.includes("o") && text.includes("u");
    if(allVowel){
        return true;
    }
    return false;
}

text = "Hello. I am Ismail. how are you?"
console.log(vowelChecker(text));