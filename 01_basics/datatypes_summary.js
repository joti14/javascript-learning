// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail; // "undefined" value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34532425398475798357n

// Reference (Non Primitive)

// Array, Objects, Funtions

const heros = ["Spiderman", "Batman", "Superman"]

let myObj = {
    name: "Joti",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world")
}

myFunction()

console.log(typeof myFunction)
console.log(typeof outsideTemp)