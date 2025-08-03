const salary = 25000;
const isBCS = true;
const height = 6;
// if(salary > 20000 && height >= 6.0){
//     console.log("shuuuu---------patro");
// }
// else{
//     console.log("Oppsss.. not interested");
// }

// if(salary > 30000 || height > 5.8){
//     console.log("Esho baba kobul");
// }

// else{
//     console.log("Vag tui Makbul")
// }

// nested condition

// if(salary > 20000 || (height > 6.5 && isBCS)){
//     console.log("Asho biye kori...");
// }

// else{
//     console.log("Dure giye mor shala...");
// }

if(salary > 20000 || height > 6.5 && !isBCS){
    console.log("Asho biye kori...");
}

else{
    console.log("Dure giye mor shala...");
}