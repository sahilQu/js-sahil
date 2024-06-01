console.log("Sahil")

let myCreatedDate=new Date("2024-06-01")
console.log(myCreatedDate.toLocaleString());

let myStamp=Date.now()
console.log(myStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})