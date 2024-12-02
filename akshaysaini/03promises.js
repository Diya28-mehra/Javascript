//Promise.all is used to call multiple API calls parellely at the same time,
//Promise.all([p1,p2,p3])
//Lets say we called p1 , p2 and p3 at the same time where p1-> 3 secs, p2-> 1secs, p3-> 2s
//1st Case three api's are succesful // In output it will return an array with the result of all three promises 
//after collecting all these results [val1,val2,val3] as any promise wait for all them to finish time take = 3secs 

//2nd Case If any promises got rejected. 
//p1 => 3 secs , p2=> 1secs, p3 => 2secs as anyone will get rejected whole Promise.all got rejected and show the same error
//shown my the corresponging promise and immediately as soon as error happened it will return the error.
//if p2 get rejecteted show wrror after 1 sec doesnt wait for p1 or p3
//What will happend to p1 and p3?? We can't cancel the promise in between anything. These promises will get accpeted or rejected


//Promise.allSettled
//In this if alll the promises passed gets successful, it will give same results
//But in the failure case, if p2 case rejected, it will wait for others as well. Irrespective of failures, the p1 will 
//give a values, you got message, then value for p3.


// Promise.race([p1,p2,p3])
// Who finishes first, will be the winner whether success or reject
// the promise which gets result earlier will be passed expample of above case it is p2=> 1secs.
//what if p2 fails error will be thrown


//Promise.any([p1,p2,p3])
//It is very muuch similar to race but it will wait for first success.
//If all of them failed, error will be shown  as a list //aggregator Error in an object


//Note -> Settled means got the result
// 1. Resolve -> success -> fulfilled
// 2. Reject -> Failure -> Rejected
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P1 Passes"),3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P2 Fail"),1000); 
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P3 Fail"),2000);
})

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(function(err){
//     console.error(err);
// });


// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(function(err){
//     console.error(err);
// });



Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(function(err){
    console.error(err);
});

