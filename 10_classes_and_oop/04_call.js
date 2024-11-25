function setusername(username){
    //complex DB calls
    this.username = username
}

//Actually we are passing a function inside another fucntion after which no fn is present in call stack
//So to whom the innermost function will refer it does not use this keyword and refer to anyfucntion
//It deletes from call stack and give its execution to global context
//So we pass outer fucntion this to refer 
function createUser(username,email,password){
    //setusername(username) //This doesn't set username as method does not called in reality we have only passed reference
    //setusername.call(username) //called but Still does not nothing printed so want to hold the reference to store variable 
    setusername.call(this,username) //So we pass the outer function this so that it refer to it at the time of removing fn from call stack
    this.email = email;
    this.password = password
}

const chai = new createUser("Chai","chai@.com","123")
console.log(chai)
