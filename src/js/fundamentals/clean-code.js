// This is ugly and hard to read code:

const x =
function(z) {
let w = 0;z.forEach(
function(q){
     w += q;
});return w;
};

x([2, 2, 2]);

// Now, this is clean and easy to read code:

const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
      sum += number;
    });
    return sum;
  };
  
  sumArray([2, 2, 2]);


// Rules of Thumb:

// Always use proper indendation
// Always use semicolons

// Line length:

// One possible format
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Another possible format
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                  howManyTacos + oneMoreReallyLongThing;

// Naming things:

// Good
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
  return numberOfThings;
}

// Bad (it's a noun)
function myName() {
  return "Thor";
}

// Code with comments!