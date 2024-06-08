

function myNmae() {
console.log("S");
console.log("A");
console.log("H");
console.log("I");
console.log("L");
    
}
//myNmae()

function addTwoNumber(number1, number2) {
    console.log(number1+number2);
    
}
//addTwoNumber(3,"4")

function addTwoNumber(number1, number2) {
    let result=(number1+number2);
    return result
    
}

const result=addTwoNumber(3,6)
//console.log("Result:",result);


function userLoggedIn(username) {
    if (username===undefined) {
        console.log("Enter your name");
        return
        
    }
    return `${username} just logged in`
    
}
//console.log(userLoggedIn("SAHIL"));
//console.log(userLoggedIn());

function calculateCartPrice(...num1) {
    return num1
    
}
//console.log(calculateCartPrice(200,400,500,1000,589));


const user={
    userName:"SAHIL",
    price:200

}
function callObject(anyObject) {
    console.log(`Uername is ${anyObject.userName} and Price is ${anyObject.price}`);
    
}
//callObject(user)

callObject({
    userName:"Saim",
    price:200
})

const myNewArray=[100,300,600,340]

function returnValue(getArray) {
    return getArray[3]
    
}
console.log(returnValue(myNewArray));