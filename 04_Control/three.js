const coding = ["js","python","django","cpp","java"]

const values = coding.forEach((item)=>{
    console.log(item) 
    return item         //Doesn't return anything by defalut or even after using return, anything is not returned 
})

console.log(values) 


const mynums = [1,2,3,4,5,6,7,8,9,10]
const arr = mynums.filter((x)=>x>4)         //[ 5, 6, 7, 8, 9, 10 ] //If we open a {} braces after arrow function use keyword return 
console.log(arr)

const newnums = []
mynums.forEach((num)=>{
    if (num>6){
        newnums.push(num)
    }
})
console.log(newnums);


const books = [
    {title:'Book One',genre : 'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre : 'Non-Fiction',publish:1992,edition:2010},
    {title:'Book Three',genre : 'History',publish:1960,edition:2000},
    {title:'Book Four',genre : 'Science',publish:1980,edition:2001},
    {title:'Book Five',genre : 'Fiction',publish:1961,edition:2011}
];

// const userbooks = books.filter((bk)=>{
//     return bk.genre==='Fiction'
// })

const userbooks = books.filter(bk => bk.publish > 1990 && bk.genre==='Fiction');
console.log(userbooks)


//++++++++++++++++++++++++++++++++Filter++++++++++++++++++++++++++++

const mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const newnum = mynumbers.map((num)=>{ 
//     return num+10
// })

//chaining

const newnum = mynumbers.map((num)=> num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>50)
console.log(newnum)


//++++++++++++++++++++++++++reduce++++++++++++++++++++++++++++

const a = [1,2,3,4];
const initialvalue = 2;
const sumwithinitial = a.reduce(
    (accumulator,currvalue)=>accumulator+currvalue,        //0=> 0+1=> 1+2=> 3+3=> 6+4=> 10
    initialvalue                                           //2=> 2+1 => 3+2=> 5+3=> 8+4=> 12
);
console.log(sumwithinitial) 