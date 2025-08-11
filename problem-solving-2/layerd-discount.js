/**
 * first100 --> 100
 * 101to200 --> 90
 * above200 --> 70
*/

function layerDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const total = 100 * first100Price + (quantity - 100) * second100Price;
        return total;
    }
    else{
        const total = 100 * first100Price + 100 * second100Price + (quantity - 200) * above200Price;
        return total;
    }
}

const total = layerDiscountedTotal(250);
console.log("total price:", total);