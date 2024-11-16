const score = 400
const balance = new Number(100); //Type of Integer Object 
console.log(balance);

//Have some methods in this Integer Object
console.log(balance.toString().length);
console.log(balance.toFixed(1)); //This gives the number after n number of decimals rounding off till it 


const othernum = 123.4485;
console.log(othernum.toPrecision(2)); //This gives the number rounding off to just n digits
//Precision round odd the value and if remaining is left gives it in exponenetial terms 
console.log(othernum.toFixed(2));

const hundreds = 1000000000000;
console.log(hundreds.toLocaleString('en-IN')); //without passinf any argument return in international number system
//10,00,00,00,00,000

//+++++++++++++++++++++++Maths+++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.abs(0.0002)); //Gives just same positive value by removing negative sign 

console.log(Math.round(5.6));
console.log(Math.round(3.4542));
console.log(Math.ceil(99.021));
console.log(Math.floor(321.3234));
console.log(Math.min(0.001,0.00002));

console.log(Math.random());
console.log((Math.random()*10)+1); //Actually *10 is done to return an integer value and +1 is added since 0.00 
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
