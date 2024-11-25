//Simple Promise we take an object and copy it and pass a function as a paramater along with resolve
const prom = new Promise(function(resolve,reject){
    //Do an async task
    //DB Calls, crptography
    setTimeout(function(){
        console.log("Async Task is complete")
        resolve()
    },1000)
})
//Resolve is connected with then
prom.then(function(){
    console.log("Promise Consumed");
})

//directly create a promise as well 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

//Can also pass some object through resolve
const prom3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"diya@123",email:"diya@mehra.com"})
    },1000)
})

prom3.then(function(obj){
    console.log(obj);
})

//Similarily catch is atteched with reject
const prom4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"karan",password:"123"})
        }
        else{
            reject(error)
        }
    },2000)
})
//We can't use a variable const to store username and return That will return error.
//So we use a diff type of things called chaining as shown below again use .then()
prom4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("work done");
})

//No compulsion to use promise by using then and catch
//we can also use async and await as well
const prom5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('error:JS went wrong')
        }
    },2000)
});


// async function consumepromisefive(){
//     const response = await prom5
//     console.log(response);
// } 
// consumepromisefive() //This will return error

//If there is a possibility of throwing errors like showing DB connections and all so we need to use catch along with async


async function consumepromisefive(){
    try{
        const response = await prom5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}  //Handle error gracefully
consumepromisefive() 


async function getAllusers(){
    try{
        const response = await fetch('https://api.github.com/users/Diya28-mehra')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

getAllusers()

//using fetch,then and catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//A fetch promises only rejects when a network error is encountered (which is usually when there is permission issue 
//similar error) Fetch() promise does not reject HTTP errors(like 404,etc).


//JS ENgine(memeory heap + call stack) => calls => [WebAPI(DOM API + settimoeut+ settiminterval + fetch()) => + 
// register call back]  
//fetch()=> Micro Task Queue Priority Queue  //This is a promise object (VIP Line)
//Register call back => TAsk Queue => add functions back to stack in JS engine

// An architecture of API's ,events and promises 


//Fetch works in two parts
// i) Web Browser/Native Node (network request is sent) 
//ii) Memory m data or variable store krate h +> Data + onfullfield(resolve) + onrejection(reject)