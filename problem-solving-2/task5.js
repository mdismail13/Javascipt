 const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees){
    let totalSalary = 0;
    for(const employee of employees){
        const totalIncrement = employee.experience * employee.increment;
        const salary = employee.starting + totalIncrement;
        totalSalary += salary;
        console.log(salary);
    }
    return totalSalary;
}

const total = totalSalary(employees);
console.log("total salary:", total);
