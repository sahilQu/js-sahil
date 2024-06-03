const mySym=Symbol("Key1")

const jUser={
    name:"Sahil Khan",
    "Full name":"Sahil Sharma",
    age:20,
    [mySym]:"myKey1",
    location:"Dehradun",
    email:"Sahil4256@gmail.com",
    isLoggedIn:false,
    lastLoggingDays:["Monady","Friday"]
}

console.log(jUser.email);
console.log(jUser["email"]);
console.log(jUser["Full name"]); // console.log(jUser.full nmae); can't use like this
console.log(jUser[mySym]);

jUser.email="sahil12@gmail.com"
//Object.freeze(jUser)
jUser.email="sahilgoogle@gmail.com"
console.log(jUser);

jUser.greeting=function () {
    console.log("Hello User");
    
}
jUser.greetingTwo=function () {
    console.log(`Hello User,${this.name}`);
    
}
console.log(jUser.greeting());
console.log(jUser.greetingTwo());