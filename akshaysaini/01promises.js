// const cart = ["ball","shoes","phone","kurta"]
// //Proceed to payment can only happen first createOrder Api is called so it is dependent 

// createOrder(cart,function(){ //This is a cart order api which creates an order and gives order Id{
//     proceedtopayment(orderID); //It will make payment after order ID 
// });

// //Problem may occur as this condition is inversion of control we have passed the control to cretaeorder for making payment
// //We don't know whether it will work or return anything or not, maintaining code is also a problem 
// //We handle these types of things using promises


// //Createorder api is an async operation we dont know exactly how much time it is taking but it will return some value after sometime
// const promise = createOrder(cart);
// //{data: undefined }
// //In this example createorder will return an empty object in promise initially and then the remaining lines of code
// //When the api will return a value the object will get automatically filled after sometime 

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

const github_api = "https://api.github.com/users/Diya28-mehra"
const user = fetch(github_api)

createOrder(card)
.then(function(orderId){
    proceedTopayment(orderId);
}).then(function(paymentInfo){
    showOrderSummary(paymentInfo);
}).then(function(paymentInfo){
    updateWalletBalance(paymentInfo);
});

//This is a way of calling nested functions using chaining promises

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => {
    showOrderSummary(paymentInfo);
  })
  .then(() => updateWalletBalance());

