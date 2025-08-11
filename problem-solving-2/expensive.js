const phones = [
    {name: "Samsung", price: 20000, camera: "12mp", color: "black"},
    {name: "Xoami", price: 18000, camera: "12mp", color: "black"},
    {name: "Oppo", price: 30000, camera: "12mp", color: "black"},
    {name: "Iphone", price: 100000, camera: "12mp", color: "black"},
    {name: "Walton", price: 31000, camera: "12mp", color: "black"},
    {name: "HTC", price: 27000, camera: "12mp", color: "black"}
]

function mostExpensivePhone(phones){
    let expensivePhone = phones[0];
    for(const phone of phones){
        if(phone.price > expensivePhone.price){
            expensivePhone = phone;
        }
    }
    return expensivePhone;
}

const expensivePhone = mostExpensivePhone(phones);
console.log(expensivePhone);