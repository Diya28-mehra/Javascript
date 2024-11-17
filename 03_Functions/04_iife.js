//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB connected");
})(); //need to apply semicolon to stop the function after being invoked
//This is a named iife 


// chai() //It is slow also to prevent the pollution from the variables of globals scope

((name)=>{
    console.log(`DB CONNECTED TO  ${name}`)
})('sql')
//This is unnamed iife
//To see js execute and call stack see video 25 of hitesh chaudhary 

