/**
 * Wjat is async?
 * What is await?
 * How async await works behind the scenes?
 * Exaples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promises.then/.catch
 **/

// //always return a promise
// async function getData(){  //It converts any kind of non promise data into a promise type
//     return "20";
// }
// console.log(getData()) // Promise { '20' }
// console.log(getData) // [AsyncFunction: getData]

// const dataPromise = getData();
// dataPromise.then((res)=> console.log(res));

// const p = new Promise((resolve,reject)=>{
//     resolve("Promise Resolved Value!!")
// });

// async function getPromise(){  
//     return p;
// }

// console.log(getPromise);  //[AsyncFunction: getPromise]
// console.log(getPromise()); //Promise { <pending> }


//Async and await are used to handle promises but why do we need them 
//And how do we handle promises before aync await 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Nannu");
    }, 15000);
});

async function handlePromise() {
    console.log("Hello World")
    // JS Engine will wait for promise to get fulfilled.
    const val = await p1; 
    console.log(val);
    console.log("Namaste JS");

    // Both the awaits work sequentially here.//If p2 time> p1 time first p1 at t1 time then p2 at time t2 
    //if p2 time<p1 time both simultaneously after t1 
    const val2 = await p2;
    console.log(val2);
    console.log("Namaste React");
}

handlePromise();
console.log("JS"); // JS Engine will print this first, not wait for Promise to get resolved.

/**
 * Call Stack
 * handlePromise() => come out of stack
 * JS Engine will move to next line 
 * print nextline console.log("JS")
 * inside handle promise ()=> function excecution gets suspended when it sees await 
 * p1,p2
 * JS does not allow call stack to be blocked.
 **/


// function getData(){
//     //JS engine will not wait for promise to be resolved
//     p.then((res)=>console.log(res));
//     console.log("Namaste JS"); //Here This is printed first and then promise resolved after 10 secs
// } //Promise Resolved Value
// getData() //Promise Resolved Value

