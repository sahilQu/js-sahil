const myarr= new Array(0,2,3,5,6)
myarr.unshift(8);
console.log(myarr.includes(7));
console.log(myarr);

const another_array=[1,2,3,[4,5,6],7[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));
console.log(Array.from({name:"Sahil"}));


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));