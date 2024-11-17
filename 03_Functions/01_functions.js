//Let's talk about functions 

function add(n1,n2){   //These are parameters
    console.log(n1+n2);
}
add(32,534);
add("3afaf",42342)
add("dsda",null)  //These are arguments
add(null,"3123")

// const result = add(3,5)
// console.log(result)

function addtwo(n1,n2){
    //let res = n1+n2
    return n1+n2
}

const r = (addtwo(321,432));
console.log(r)

function loginuser(username){
    if (username===undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

const result = loginuser("diya")
console.log(result)

console.log(loginuser())


function calculatecartprice(...num1){ //sign same as spread operator but actually rest operator
    return num1
}

console.log(calculatecartprice(2321,4324,4324)) //[2321,4324,4324]

function calculateprice(v1,v2,...num1){ //sign same as spread operator but actually rest operator
    return num1
}
console.log(calculateprice(3123,1231,536,756)); //[536,756]

const user = {
    username:"diya",
    price:213
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)

function returnsecondvalue(getarr){
    return getarr[1]
}

console.log(returnsecondvalue([21,34,6547,857,98]));