//Singleton => any object made from a contructor is singleton 
//Object.create


//Now reading 
//object literals => object declaration

const mysym = Symbol("keys1")

const user = {
    name:"Diya",
    age:18,
    "full name":"Diya Mehra",
    //"full_name":"Diya Mehra" //if this is used we can access from . method because _ is bearable 
    location:"Jaipur",
    email:"diya@google.com",
    [mysym]:"mykey1",          //Square Brackets are used to refer to symbols //If not used considered as strings 
    isloggedin:false,
    lastlogindays:["Monday","Saturday"]
}

//Generally we get objects
console.log(user.lastlogindays)
console.log(user["email"])
console.log(user["isloggedin"])
console.log(user["full name"]) //But this is not accessed from . method because blankspace is not used in identifier
//console.log(typeof user.mysym); //This is a string datatype
//We want to use a symbol so use a square brakcet
console.log(user[mysym])

user.email="chatgpt@gakd.com"
//If we dont want anyone to do any changes in my object, we freeze that object and that will prevent it to change
//Object.freeze(user)
user.email = "diya.com" //No changes done 
//console.log(user.email) //Still printing chatgpt@gakd.com

//console.log(user)

user.greeting = function(){  //Functions made with objects
    console.log("Hello JS User")
}

console.log(user.greeting());

user.greetingtwo = function(){
    console.log(`Hello User,${this.name}`)  //Functions made with objects
}

console.log(user.greetingtwo());
