//Two Types

//Primitive : String, Number, Boolean, null, undefined, Symbol, BigInt

//Dynamic Typed : Language 
const name = "hello"
const score = 100
const scorevalue=100.32

const islogged = false
const outsideTemp = null //Object type
let useremail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId); //false

const bigNumber = 12039147239857948598247592n; //Bigint type 

//Non Primitive(Reference) : Arrays, Objects, Functions 

const heros = ['shakiman','naagraj','doga']
let myobj = {
    name:"Diya",
    age:32,
}
const myfunction = function (){ //dattaype => object function 
    console.log("hello World");
}

console.log(typeof myfunction);


//+++++++++++++++++++++++++++++
//Stack=> Primitive (copy is passed)  and Heap=> Non Primitive (reference is passed)

let myname = "Diya";
let hisname = myname;
hisname = "Kshitij" //Only hisname is changed not myname because a copy of myname is passed not a reference
console.log(myname);
console.log(hisname);


let user = {
    email:"user@google.com", //Non primittive type a reference is passed inside the heap
    upi:"user@434"
}

let userone = user;
userone.email = "diya@gmail.com";
console.log(user.email);  // Now both are changed as only one object is present a referce
console.log(userone.email); //is passed any change is changed in that single place only 
