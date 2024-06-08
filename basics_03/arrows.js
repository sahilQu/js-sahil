const user={
    username:"sahil",
    price:200,
    messagecall:function() {
        console.log(`${this.username}, this is message`);
        console.log(this);
        
    }
}
// user.messagecall()
// user.username="saim"
// user.messagecall()

console.log(this);

// function code() {
//    let username="sahil"
//    console.log(this.username);
    
// }
// code()

const code = () => {
    let username="sahil"
   console.log(this.username);

}
//code()

// const addTwo= (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(7,3))

//const addTwo= (num1,num2) =>  num1+num2 // implicit return
//const addTwo= (num1,num2) =>  (num1+num2)

const addTwo= (num1,num2) =>  ({username:"sahil"})

console.log(addTwo(7,3))