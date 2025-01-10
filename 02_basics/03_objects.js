// object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Hasnahena",
    age: 25,
    [mySym]: "mykey1",
    location: "Cumilla",
    email: "joti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// accessing object elements
// console.log(JsUser.email);

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "joti@google.com" //changing values
// Object.freeze(JsUser) // values cant be changed now
// JsUser.email = "joti@microsoft.com" 

// console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello JS user");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
