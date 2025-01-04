const score = 400
// console.log(score); 

const balance = new Number(100.6543)
// console.log(balance);

// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

const anotherNumber = 123.8953
// console.log(anotherNumber.toPrecision(4)); //round-up

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //US-standards
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2)); 

console.log(Math.random()); // values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

// to avoid 0 case, min value is added
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

