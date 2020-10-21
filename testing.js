function getOdds(numbers){
    const oddNumbers = numbers.filter(function(number){
        return (number % 2 !== 0); 
    });
    return oddNumbers;
}
console.log(getOdds([1, 2, 3, 4, 5]));

function getEvens(numbers){
    const evenNumbers = numbers.filter(function(number){
        return (number % 2 === 0); 
    });
    return evenNumbers;
  }
  console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function getDuplicateCount(x, numbers){
    let counter = 0;
    numbers.forEach(function(number){
        if (number === x){
            counter++;
        }
    }); return counter;
}

console.log(getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]));


function makeThemDoctors(students) {
    const doctors = students.map(function (student) {
        return "Dr. ${student}";
    });
    return doctors;
}
console.log(makeThemDoctors(["Ali", "Aseel", "Richard"]));
