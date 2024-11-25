class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    set email(email){
        this._email = email
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email
    }
    get password(){
        return this._password.toUpperCase()
    }
}
//RangeError: Maximum call stack size exceeded If we use setter getter and constructor both 
const hitesh = new User("h@hitesh.ai","abc")
//to remove this error we can use  another name variable which acts as a private property 
console.log(hitesh.password)


//Old method 
function user(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new user("chai@chai.com", "chai")
console.log(chai.email);



//More Old methods
const man = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(man)
console.log(tea.email);