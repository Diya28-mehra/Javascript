let score = "1aa";
//when we take input from backend we dont know what type of value it is
// so we use type of to see 
console.log(typeof score); //string
console.log(typeof (score)); //string 

let vm = Number(score);  
//let vm = String(score);
console.log(typeof (vm)); //number
console.log(typeof (score)); //string 
console.log(vm); //NaN
console.log(Boolean(score)); //true

// if "55" converted it gives 55
//if "55fffffffd" converted it gives NaN not a number but type is still number only
//if 0 false 1 true

let isLoggedIn = "";
let booleanis = Boolean(isLoggedIn);
console.log(booleanis);
//empty strings or number 0 gives false in boolean 
