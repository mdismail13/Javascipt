const products = [
    {name: "shampoo", price: 300},
    {name: "chiruni", price: 100},
    {name: "shirt", price: 700},  
    {name: "pant", price: 1200}  
]

function totalPrice(products){
    let totalPrice = 0;
    for(const product of products){
        totalPrice += product.price;
    }
    return totalPrice;
}

const total = totalPrice(products);
console.log("total price:", total);