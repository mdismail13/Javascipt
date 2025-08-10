const text = "i want to kiss you";

let newText = [];

for(let char of text.split(" ")){
    char = char[0].toUpperCase() + char.slice(1);
    newText.push(char);
}
console.log(newText.join(' '));
