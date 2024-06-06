const tinderUser= new Object()
const TinderUser={}
tinderUser.id=4356
tinderUser.name="Sahil"
tinderUser.loggedIn=false

// console.log(tinderUser);
// console.log(TinderUser);

const regularUser={
    email:"sahil@gmail.com",
    fullName: {
        
            userFullName:{
                firstName:"Md",
                middleName:"Sahil"
            }

        }

    }

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);

const obj1={1:"A", 2:"B", 3:"C"}
const obj2={4:"D", 5:"E", 6:"F"}
const obj4={7:"G", 8:"H", 9:"I"}

//const obj3={obj1,obj2}
 //obj3=Object.assign({}, obj1, obj2, obj4)
// const obj3={...obj1, ...obj2}
// console.log(obj3);

const user=[
    {
        id:23,
        Name:"Quantum"
    },
    {
        id:23,
        Name:"Quantum"
    },
    {
        id:23,
        Name:"Quantum"
    }
]
user[1].Name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('loggedIn'));

const Course={
    courseName:"JS",
    coursePrice:999,
    courseInstructor:"Sahil"
}
const{courseInstructor:Instructor}=Course
console.log(Instructor);