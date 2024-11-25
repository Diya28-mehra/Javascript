//Object Literal
const user = {
    username:"diya",
    login_count:8,
    signedin:true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username:${username}`); say username not defined //didn't take anything from outside
        console.log(`username:${this.username}`);
        console.log(this); //show the current obejct
    }
}

console.log(user.getUserDetails());
console.log(user.username);

//console.log(this); show empty parenthesis
//But in window this show the current window object

const user2 = {
    username:"nannu",
    login_count:10,
    signedin:true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username:${username}`); say username not defined //didn't take anything from outside
        console.log(`username:${this.username}`);
        console.log(this); //show the current obejct
    }
}

//Constructor function
// const promiseone = new Promise()
// const date = new Date()

function User(username,logincount,isloggedIn){
    this.username=username,
    this.logincount = logincount,
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Hii welcome ${this.username}`);
    }
    return this //implicity defined no need to write
}

const User1 = User("diya",10,"true")
const User2 = User("chaiaurcode",11,"false")
console.log(User1) //values are overridden instead of diya show chaiaurcode so it has changed user1 only


//That's why we use new keyword , an new empty object is created , then constructor function is called with arguments and injected in function 

const User3 = new User("nannu",10,"true")
const User4  = new User("pannu",11,"false")
console.log(User3);
console.log(User4);

