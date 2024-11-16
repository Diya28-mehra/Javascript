//Arrays

const myarr = [0,1,2,3,4,5,true,"hitesh"]
//Resizable and mix of datatypes
console.log(myarr[3]);

const myheros = ["shakiman","naagraj"]

const arr = new Array(1,2,3,4) //Creates an Array Object 
console.log(arr);

arr.push(38);
console.log(arr);
arr.push(10);
console.log(arr);
arr.pop()
console.log(arr)


arr.unshift(45); // Used to add any number in starting of arr
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.join()); //returns string type 

const n1 = myarr.slice(1,4);
console.log("A",n1);

const n2 = myarr.splice(2,4);
console.log("B",n2);

//Slice is giving parting the array from range 0 to n-1
//While Splice is giving parting the array from range 0 to n
