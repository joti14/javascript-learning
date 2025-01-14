//+++ Singleton +++
// 2 ways to declare

// const tinderUser = new Object() //1st way, singleton object

const tinderUser = {} //2nd way, non-singleton object

tinderUser.id = "joti14"
tinderUser.name = "Yoti"
tinderUser.isLogged = false

// console.log(tinderUser);

//++ Nested object ++
const snapUser = {
    email: "yoti@gmail.com",
    fullname: {
        userfullname: {
            firstname: "HasnaHena",
            lastname: "Joti"
        }
    }
}
// console.log(snapUser.fullname.userfullname.firstname);

//+++ Merge Objects +++

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "A", 2: "B"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //{} acts as target and obj1, obj2 as source
// console.log(obj3 == obj1);

const obj3 = {...obj1, ...obj2} //using spread, prefered way
// console.log(obj3);


// +++ objects from database are array of objects +++

const users = [
    {
        id: 123,
        email: "yoti@gmail.com"
    },
    {
        id: 123,
        email: "yoti@gmail.com"
    },
    {
        id: 123,
        email: "yoti@gmail.com"
    }
]

// accesing value
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));