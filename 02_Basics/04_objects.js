//objects singleton How to decalre objects through constructors

const tinderuser = new Object() //Signelton
const tinderuser1 = {}   //Not singleton 
console.log(tinderuser);  //=> {}
console.log(tinderuser1); //=> {}
//Both the objects are same and give same output just 1 difference

tinderuser.id = "123sf"
tinderuser.name="Livee"
tinderuser.isloggedin = true

// console.log(tinderuser)

const regularuser = {
    email:"some@gmail.com",
    full_name: {
        first_name:"Diya",
        middle_name:"",
        last_name:"Mehra"
    }
}

console.log(regularuser)
console.log(regularuser.full_name.last_name) //Nested 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2}        =>//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = Object.assign(obj1,obj2)  //=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = Object.assign({},obj1,obj2) //=> {} acts as a target object(first argument) 
                                        //so we give an empty object to store other value
console.log(obj3)
console.log(obj4)
//Assign is a static method that copies all the enumerable own properties 
//from one or more source objects to a target object

const obj5 = {...obj1,...obj2};
console.log(obj5)  //use spread operator easy simple and latest method 

//When value comes from Database as an array of objects
const users = [
    {
        id:1,
        email: "agoogle.com"
    },
    {
        id:2,
        email: "bgoogle.com"
    },
    {
        id:3,
        email: "cgoogle.com"
    }
]
console.log(users[2].email)


console.log(tinderuser)
console.log(Object.keys(tinderuser)) //Datatype is array
console.log(Object.values(tinderuser)) //Datatype is array
console.log(Object.entries(tinderuser)) //Datatype is array

console.log(tinderuser.hasOwnProperty('isloggedin')) //Returns true or false


//Destructuring of Objects - very Important

const course = {
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh",
}
//course.courseinstructor
const {courseinstructor:instructor} = course
//console.log(courseinstructor) //canbe renamed as well show below
console.log(instructor)

// {
//     name: "diya",
//     coursename: "js in hindi",
//     price: "free"
// }
