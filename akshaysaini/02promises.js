const cart = ["shoes","pants","kurta"];

const promise = createOrder(cart);
// console.log(promise);
// promise.then(function(orderId){
//     console.log(orderId);
// });
// console.log(promise);

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId //returning variable
}).catch(function(err){
    console.log(err.message);
}).then(function(orderId){
    return proceedToPayment(orderId);  //directly returning promise 
}).then(function(paymentInfo){
    console.log(paymentInfo);
}).catch(function(err){
    console.log(err.message);
}).then(function(){ //then after catch will be called always
    console.log("No matter what happens, I will be definitely called");
});


//producer end
//creater a create order API which takes and return promise in this function 
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //createorder
        //validate cart
        //orderId
        if (!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        //logic for create orde
        const orderId = "12345";
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });
    return pr
}


function proceedToPayment(orderId){
    ///assume
    return new Promise(function (resolve,reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return true; //chnage this value to understand
}