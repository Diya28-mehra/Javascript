const accountId = 14324;
//const value can't be changes sometimes we dont need to change 
let accountEmail = "diya@gmail.com"
//assigns a space in memory and stores it
var accountPassword = "12345"
//Before, Block scopes were not applicable in js
//Generally var is not used as scopes not included
//So mostly we use let
accountCity = "Jaipur"
// accountId = 4; //Not allowed 

accountEmail = "andaf";
accountPassword = "3123";

console.log([accountId,accountEmail,accountPassword,accountCity]);
console.log(accountId);


/* 
Prefer not to use var
because of issue in block space and functional scope
*/

/*
If anyvariable is left only initilaised and 
not assigned any value
js gives it undefines 
*/

/*
You cannot re-declare a variable declared with let or const.
*/

/*
Difference Between var, let and const
        Scope	Redeclare	Reassign	
var 	No	    Yes	        Yes	
let 	Yes	    No	        Yes	
const	Yes	    No	        No	*/
//Hoisting means if a variable is defined with var x then we can define same variable with let x but not vice versa
//Means if a variable is already declared like let x or only x , we can't redeclare it with var x.