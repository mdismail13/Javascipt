function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopQuantity * laptopPrice;
    const tabletTotalPrice = tabletQuantity * tabletPrice;
    const mobileTotalPrice = mobileQuantity * mobilePrice;

    const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;

    return totalPrice;
}

const totalBudget = calculateElectronicsBudget(7, 15, 30);
console.log(totalBudget);