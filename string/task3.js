function replacer(text, a, b) {
    for(const char of text){
        text = text.replace(a.toLowerCase(), b.toLowerCase());   
        text = text.replace(a.toUpperCase(), b.toUpperCase());
    }
    return text;
}

const text = "xxxxxxxxxxxxxXXXXXXXXHelloxxxxxx";
console.log(replacer(text, "x", "y"));