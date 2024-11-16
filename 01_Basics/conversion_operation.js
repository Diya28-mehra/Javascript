let score = "1aa";
console.log(typeof score);
console.log(typeof (score));

let vm = Number(score);
console.log(typeof (vm));
console.log(typeof (score));
console.log(vm);

// if "55" converted it gives 55
//if "55fffffffd" converted it gives NaN
//if 0 false 1 true

let isLoggedIn = "1";
let booleanis = Boolean(isLoggedIn);
console.log(booleanis);