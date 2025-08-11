const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'jon'];

function smallestName(names){
    if(!Array.isArray(names)){
        return "Please provide an array!"
    }
    let smallestName = names[0];
    for(const name of names){
        if(name.length < smallestName.length){
            smallestName = name;
        }
    }
    const smallestNameArray = [];
    for(const name of names){
        if(name.length === smallestName.length){
            smallestNameArray.push(name);
        }
    }
    return smallestNameArray.join(", ");
}

const names = smallestName(heights2);
console.log(names);