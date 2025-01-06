const marbel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

// marbel_heros.push(dc_heros) // push method returns array inside an array

// console.log(marbel_heros);
// console.log(marbel_heros[3][1]);

// const all_heros = marbel_heros.concat(dc_heros) // concat method returns two array into one single array
// console.log(all_heros);

const new_heros = [...marbel_heros, ...dc_heros] // spread operator
// console.log(new_heros);

const array_one = [1, 2, 3, [4, 5, 6], 7, [8, 9, [11, 12]]]

const array_two = array_one.flat(Infinity) // flat returns all the nested array into one single array
console.log(array_two);

console.log(Array.isArray("Hasnahena"));
console.log(Array.from("Hasnahena")); // from converts the string to a array
console.log(Array.from({name: "hasnahena"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
