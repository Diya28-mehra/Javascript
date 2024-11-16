const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["supernam","flash","batman"]

// marvel_heros.push(dc); //Adds the whole array in the end of another array
// console.log(marvel_heros); 

const newarr = marvel_heros.concat(dc); //Adds both the arrays
console.log(newarr);

const all_new_heros = [...marvel_heros,...dc] //Spread operator
console.log(all_new_heros);

const aa = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realarr = aa.flat(Infinity); //This returns a flat array by conactinating all the nested arrays can also pass the parameter(1,2or 3)
console.log(realarr)

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})) //interesting

let score1 = 1;
let score2 = 2;
let score3 = 3;
console.log(Array.of(score1,score2,score3));

