let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(const object in myObject) {
    console.log("key:", object, "|", "type:", typeof myObject[object]);
}