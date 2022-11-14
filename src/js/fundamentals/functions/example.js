/*

Make note of the fact that by calling favoriteAnimal() inside of console.log() with the argument 'Goat' 
we get the return value of the function, string of "Goat is my favorite animal!", printed to the console.

We’re passing in a function call favoriteAnimal('Goat') as an argument in a different function call - log(). 

Keep this possibility in mind because you’ll be passing in function calls as arguments somewhat often.
If we just called the function without console.logging what it returns, nothing would appear in the console but nonetheless the function would return that string.

*/

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
