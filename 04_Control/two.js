//for
const arr=[1,2,3,4,5]
for (let i =0; i<5; i++){
    const ele = arr[i];
    console.log(ele)
}

for(const iterator of arr){
    console.log(iterator)   // of operator loops through the element
}

for (const it in arr){
    console.log(it)       // in operator of array loops through the indexes 
}

arr.forEach( function (item){  //prints values of elements of array using foreach 
    console.log(item)
})

arr.forEach((item)=>{
    console.log(item)
})                      //prints values of elements of array using arrow fucntion 


function printme(item,index,arr){
    console.log(item,index,arr)     //using fucntion 
}

arr.forEach(printme)


const greetings = "Hello world I am Diya"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set("IN","India")
map.set("BR","Brazil")
map.set("EG","Egypt")
map.set("ENG","England")

console.log(map)

for (const it of map){
    console.log(it) //prints it in the form of array
}


for (const [key,value] of map){
    console.log(key,value) //prints it in the form of key value pairs
}

const obj = {
    'game1':'Ludo',
    'game2':'Carrom',
    'game3':'Business'
}

// for (const [key,value] of obj){
//     console.log(key,value)     //This is not iterable 
// }


const myobj = {
    js:'javascipt',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}

for (const key in myobj){
    console.log(key,myobj[key]) //Prints values of objects and their values
}


const mycoding = [
    {
        langauge:"javascript",
        filename:"js"
    },
    {
        langauge:"python",
        filename:"py"
    },
    {
        langauge:"java",
        filename:"java"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langauge)
    console.log(item.filename)
})
