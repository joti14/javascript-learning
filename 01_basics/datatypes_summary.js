// // Primitive

// // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.4

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; // "undefined" value

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 34532425398475798357n

// // Reference (Non Primitive)

// // Array, Objects, Funtions

// const heros = ["Spiderman", "Batman", "Superman"]

// let myObj = {
//     name: "Joti",
//     age: 24,
// }

// const myFunction = function(){
//     console.log("Hello world")
// }

// myFunction()

// console.log(typeof myFunction)
// console.log(typeof outsideTemp)


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive Types) and Heap (Non-Premitive Types)
// 

let myChannelname = "hasnahena" // value directly stored

let anothername = myChannelname // creates a complete copy
anothername = "jotipoti" // Doesnt affect myChannelname

console.log(myChannelname)
console.log(anothername);

// Heap

// Reference stored
let userOne = {
    email: "user@gmail.com",
    username: "rohan"
}

let userTwo = userOne // Points to same memory reference

userTwo.email = "rohan@gmail.com" // changes both userOne 
                                   //and userTwo

console.log(userOne.email);
console.log(userTwo.email);