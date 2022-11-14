// function add7(number) {
//     return number + 7;
// }

let add7 = (number) => number + 7;

// console.log(add7(3)); 3 + 7 = 10

// function multiply(number, secondNumber) {
//     return number * secondNumber;
// }

let multiply = (number, secondNumber) => number * secondNumber;

// console.log(multiply(2, 2)); multiply to 4

// function capitalize(word) {
//     return word.toUpperCase();
// }

let capitalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

// console.log(capitalize('father'));
// console.log(capitalize('FATHER'));
// console.log(capitalize('FatHer'));

let lastLetter = word => word.charAt(word.length - 1);

