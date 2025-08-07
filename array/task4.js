// const statement = 'I am a hard working person'

// Solution 1:
// const reverseStatement = statement.split(" ").reverse().join(" ");

// console.log(reverseStatement);

// Solution 2:

// let reverseStatement = "";

// const temp = statement.split(" ");
// console.log(temp);
// for(let i of temp) {
//     reverseStatement = i + " " + reverseStatement;
//     console.log(reverseStatement);
// }
// console.log(reverseStatement);


// Solution 3:
// const temp = statement.split(" ");
// const reverseTemp = [];
// for(let i = 0 ; i < temp.length ; i ++) {
//     reverseTemp.unshift(temp[i]);
// }

// const reverseStatement = reverseTemp.join(" ");

// console.log(reverseStatement);