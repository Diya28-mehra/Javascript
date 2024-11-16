const name = "Diya"
const repoCount = 50

//console.log(name+repoCount+"value")  DOnt use it old style of printing 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const game = new String("Ludo"); // String Object type
console.log(game[0]); //Stores value of string key valeu pairs of indexes and characters

console.log(game.toUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('u'));
console.log(game.substring(0,2)); //Dont  consider negative values
console.log(game.slice(-3)); //Take negative indexes from back
const myname = "     diya ";
console.log(myname.trim()); //Trim removes excess staring and ending spaces 

const url = 'hitest@7493740234$5';
console.log(url.replace('@7493','abcd'));
console.log(url.includes('hite'));
