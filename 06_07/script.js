/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */
let a = 15;
let b = "15";
// = is used for assignment

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) { // == used to match assigned values
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}

let aa = 5;
let bb = 5; 
 // = is used for assignment

console.log(`let a: ${aa} (${typeof aa})`);
console.log(`let b: ${bb} (${typeof bb})`);

if (aa === bb) { // == used to match assigned values
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
