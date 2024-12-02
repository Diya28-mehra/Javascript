async function handlePromise(){
    try{
        const data = await fetch("https://api.github.com/users/Diya28-mehra")
        //fetch () => Response object has a body which is readable stream 
        //If we want to convert it into .json => Resoponse.json() a promise => result   
        const jsonvalue = await data.json();
        console.log(jsonvalue);
    }
    catch(err){
        console.log(err);
    }
}
handlePromise();
//or I can also use .catch after async function () This is an older way
