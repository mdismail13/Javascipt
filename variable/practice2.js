const marks = [75.25, 65, 80, 35.45, 99.50];
let sum = 0;

for(let mark of marks){
    sum += mark;
}

let average = sum / marks.length;

console.log(average.toFixed(2));

sum = 0;
for(let i=0; i < marks.length; i++){
    sum += marks[i];
}
average = sum / marks.length;
console.log(average.toFixed(2))