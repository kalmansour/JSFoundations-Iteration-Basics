// SYNTAX
// arrayName.forEach(function (arrayElement){
// CODE;
// })

// const colors = ["Blue", "White", "Purple", "Pink", "Black"];

// console.log("We at CODED love these colors: ");

// let i = 0;

// while(i < colors.length){
//     console.log(colors[i]);
//     i++;
// }

// colors.forEach(function (color){
//     console.log(color);
// });

// colors.forEach(function (color){
//     console.log(`This is the color: ${color}`);
// });

const numbers = [1,2,3,4,5];

let total = 0;

numbers.forEach(function(number){
    total = total + number;
    console.log("number", number);
    console.log("total", total);
});

// const numbers = [1,2,3,4,5,6,7,8];
// let squares = [];

// numbers.forEach(function(number){
//     squares.push(number * number);
// });

// squares = numbers.map(function(number){
// return number * number;
// });

// console.log("numbers", numbers);
// console.log("squares", squares);

// const grades = [40, 50, 60, 70, 80, 90, 100];

// let passedStudents = grades.filter(function(grade){
//     return grade > 60;
// });

// console.log("grades", grades);
// console.log("passedStudents", passedStudents);

const instructors = ["Laila A", "Aziz", "Mshary", "Hasan", "Laila B"];

const theLailas = instructors.filter(function(instructor){
    return instructors.includes("Laila");
});

console.log("theLailas", theLailas);
