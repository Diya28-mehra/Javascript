//Date is started from 1 January,1970
let mydate = new Date(); //object of Date is instantiated
console.log(mydate); //various methods are availble used to see date in an easy format like getmonth getday 
console.log(mydate.toDateString()); //readable
console.log(mydate.toString()); //readable
console.log(mydate.toLocaleString()); // Indian time and date format
console.log(typeof(mydate)); // Object type

let mycreateddate = new Date(2023,0,23);
let mycreateddatewithtime = new Date(2023,0,23,6,8,30);
console.log(mycreateddate.toString());
console.log(mycreateddatewithtime.toLocaleString()); 
let date = new Date("02-14-2023")
let mytimestamp = Date.now();
console.log(mytimestamp) // Gives miliseconds
console.log(date.getTime()); // Gives miliseconds


let newdate = new Date();
newdate.toLocaleString('default',{
    weekday:"long",
})