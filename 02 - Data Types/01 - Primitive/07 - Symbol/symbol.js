// Symbol is a unique and immutable data type used for object property keys

// Creating a Symbol
let symbol1 = Symbol("identifier"); // The description is optional
let symbol2 = Symbol("identifier");

console.log("Symbol1:", symbol1);
console.log("Symbol2:", symbol2);
console.log("Are both symbols equal?", symbol1 === symbol2); // Output: false (Symbols are always unique)