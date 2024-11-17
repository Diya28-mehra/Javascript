//Date is started from 1 January,1970
let mydate = new Date(); //object of Date is instantiated
console.log(mydate); //various methods are availble used to see date in an easy format like getmonth getday  2024-11-17T17:30:22.025Z
console.log(mydate.toDateString()); //readable =>Sun Nov 17 2024
console.log(mydate.toString()); //readable =>Sun Nov 17 2024 17:30:22 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleString()); // Indian time and date format => 11/17/2024, 5:30:22 PM
console.log(typeof(mydate)); // Object type

let mycreateddate = new Date(2023,0,23);
let mycreateddatewithtime = new Date(2023,0,23,6,8,30);
console.log(mycreateddate.toString());// => Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(mycreateddatewithtime.toLocaleString()); //=>11/17/2024, 5:30:22 PM
let date = new Date("02-14-2023")
let mytimestamp = Date.now();
console.log(mytimestamp) // Gives miliseconds 1731864622093
console.log(date.getTime()); // Gives miliseconds 1676332800000


let newdate = new Date();
newdate.toLocaleString('default',{
    weekday:"long",
})