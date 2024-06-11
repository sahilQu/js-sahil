const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num) => {
//    return num>4})


// const newNums=[]
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
const newNums=myNums.map((num)=>num+10)


//console.log(newNums);

const allNums=[1,2,3]
// const myTotal=allNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);

//     return acc+currval
// },0)

const myTotal=allNums.reduce((acc,curr) => acc+curr,0)
//console.log(myTotal);

const shoppingCart=[
    {
        ItemName:"JS COURSE",
        Price:500
        
    },
    {
        ItemName:"JS COURSE",
        Price:500
        
    },
    {
        ItemName:"DATA COURSE",
        Price:2999
        
    },
    {
        ItemName:"PYTHON COURSE",
        Price:999
        
    },
    {
        ItemName:"C++ COURSE",
        Price:599
        
    },
    {
        ItemName:"DATA STRUCTURE COURSE",
        Price:1500
        
    }
]
const priceToPay=shoppingCart.reduce((acc,item) => (acc+item.Price),0)

console.log(priceToPay);