// Declaring boolean variables
let x = true;
let y = false;

// Logical AND (&&) - Returns true if both conditions are true
console.log("x && y:", x && y); // Output: false (because one is false)

// Logical OR (||) - Returns true if at least one condition is true
console.log("x || y:", x || y); // Output: true (because one is true)

// Logical NOT (!) - Reverses the boolean value
console.log("!x:", !x); // Output: false (because x is true, so !x is false)
console.log("!y:", !y); // Output: true (because y is false, so !y is true)

// Using logical operators with numbers
let a = 10;
let b = 5;

// Checking if both conditions are true
console.log("a > 0 && b > 0:", a > 0 && b > 0); // Output: true (both are greater than 0)

// Checking if at least one condition is true
console.log("a > 0 || b < 0:", a > 0 || b < 0); // Output: true (because a > 0 is true)

// Using NOT with conditions
console.log("!(a > b):", !(a > b)); // Output: false (a > b is true, so !true is false)
