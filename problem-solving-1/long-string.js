function longString(text){
    const textArray = text.split(" ");
    for(const str of textArray){
        console.log(str.length);
    }
}

const text = "I am learning Programming to become a programmer";
longString(text);