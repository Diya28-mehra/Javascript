// //if statement 
// if (condition){

// }

// //if else 
// if (condition){

// }
// else{

// }

const score = 200
if (score>100){
    const power = "fly"
    console.log(`User poer: ${power}`)
}
// console.log(`User poer: ${power}`) Block scope 

const balance = 500
// if (balance>=500) console.log("test")
//     console.log("test2") also taken in consideration inside if condition until ; is not used 

if (balance<500){
    console.log("Less than")
}
else if (balance>500){
    console.log("Greater than")
}
else{
    console.log("equal to")
}


//False values
// false,0,-0,BigInt 0n, "", null, undefined, NaN

//truthy values
//"0",'false'," ",[], {}, function(){}

// false==0 true 
// false=='' true
// 0=='' true