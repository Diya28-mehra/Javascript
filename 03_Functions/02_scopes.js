let a = 10
const b = 20
var c = 30
console.log(a)
console.log(b)
console.log(c)


{
    let a = 20
    const b = 30
    var c = 40
}

console.log(a) ///not changed //10
console.log(b)  //not changed //20
console.log(c)  //it is changed to 40 instead of 30 

/*****************************Scopelevel and Mini Hoisting ************************** */
function one(){
    const username = "diya"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}
one()
//Inside functions or child functions can access parents variable 
//this is called closure

//++++++++++++++++++++interesting++++++++++++++++++++++++//

console.log(addone(5))
function addone(value){
    return value+1
}

//We can call function before declaration 


const addtwo = function(num){
    return num+1
}

console.log(addtwo(5))
//But here it is not possible to call fn before decalaration
