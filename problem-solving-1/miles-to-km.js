function milesToKilometers(miles){
    const kilometers = miles * 1.609;
    return kilometers;
}
const miles = 5;
const kilometers = milesToKilometers(miles);
console.log(miles,"miles",":", Number(kilometers.toFixed(2)), "kilometers");