/**
 * this in global scope
 * this inside a function 
 * this in strict mode (this substitution)
 * this value depends on how this is called (window)
 * this inside a obejct's method
 * call apply bindmethods(sharing methods)
 * this inside arrow function
 * this inside nested arrow function
 * this inside DOM
 */

"use strict"

//this in global scope
console.log(this) //=> window object(global object of the respective runtime enviroment) {} in node env 

//this inside a function
function x(){
    //the value depends on strict / non strict mode 
    console.log(this); //Object [global] in non strict mode //undefined in strict mode 
}

x(); //without any reference of an object

//"use strict" used at the top of document => this will be undefined 
// IF the value of this keyword is undefined or null in real 
//this keyword will be replaced with global object because of substitution 
//only in non strict mode

//window.x(); //with the reference of window object //it will give window

const student = {
    name:"Dia",
    x: function (){ //when function is written inside an object it is called a method 
        console.log(this); // { name: 'Dia', x: [Function: x] } this refers to object student
        console.log(this.name); //Dia
    }
}
student.x();


//call apply bindmethods(sharing methods)

const student2 = {
    name:"Dipika"
}

//I want to share method x of student to student2
student.x.call(student2) //.call will take the value of this 


//this inside arrow functions
// Arrrow functions provide a this binding as they don't have it they have enclosing lexical content
const o = {
    a:20,
    x:()=>{
        console.log(this); //window object take the value of lexical context so window or {}
    }
}
o.x()

//Nested Arrow Function

const on = {
    a:20,
    x:function(){
        //enclosing lexical context 
        const y = ()=>{
            console.log(this); //{ a: 20, x: [Function: x] } value will be object on 
        };
        y();
    },
};
on.x()
//matlab ye bahar k bahar ka batata h like dadaji type



//this inside DOM
//[object HTMLButtonElement] => reference to HTML Element

