const user={
    username:"diya",
    price:423543,
    welcomemesg:function(){
        console.log(`${this.username}, Welcome to website`)
        // console.log(this); //it talks about the current context
    }
}
//If we check the value of this inside a function which is placed inside an obejct
// it tells us about the object as shown above

user.welcomemesg()
user.username="sam"
user.welcomemesg()

// console.log(this); //this is empty as we are inside node environment so it is turnign towards an empty object{}

function chai(){
    console.log(this);
}
chai()  //If this is called inside a function all the tasks values and many things 
//If we try to call this inside a normal function it shows diff values 
function cha(){
    let username = "diya"
    console.log(this.username); //undefined
    console.log(this); //same many diff values
}

cha() //it shows we cant use this inside a function this is used only inside object

const chah = function(){
    let username = "diya"
    console.log(this.username); //Still this is undefined 
    console.log(this); //same many diff values
}

chah()  

//Now we can remove the word function 
const ch = ()=>{
    let username = "diya"
    console.log(this.username); //undefined 
    console.log(this); //{} empty object 
}

ch() //Here this is giving an empty object 

const addtwonum=(n1,n2)=>(n1+n2)
const add=(n1,n2)=> ({username:"diya"})
//always use round parenthesis with arrow 

