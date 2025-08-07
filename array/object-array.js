const students = [
    { name : "Ismail", class : 12, section : "B", roll : 13 },
    { name : "Imran", class : 10, section : "C", roll : 25 },
    { name : "Emon", class : 10, section : "B", roll : 9 },
    { name : "Sumon", class : 12, section : "B", roll : 5 },
    { name : "Siam", class : 10, section : "C", roll : 18 }
]

// for(let student=0;student<students.length;student++){
//     console.log(students[student]);
// }

for(let student of students){
    console.log(student.name + ": " + student.class);
}