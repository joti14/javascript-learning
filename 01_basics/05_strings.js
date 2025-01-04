const name = "Yoti"
const repoCount = 15

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// 'new' is a string object
const gameName = new String('Rock-Paper-Scissor')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); //Character access
// console.log(gameName.indexOf('a'));
// console.log(gameName.substring(0,4)); // doesnt take negative value

const newString = gameName.slice(-15, 10)
console.log(newString);

const anotherString = "  hasnahena   "
console.log(anotherString.trim());
 
const url = "https://hasnahena.com/joti%20hasna"

console.log(url.replace('%20', '-'));

console.log(url.includes('joti'))

console.log(gameName.split('-'))