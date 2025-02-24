// Declaring two variables for comparison
let a = 10;
let b = "10";
let c = 5;

// Equal to (==) - compares values (loose equality)
console.log("a == b:", a == b); // Output: true (because values are the same, but types are different)

// Strictly equal to (===) - compares values and types (strict equality)
console.log("a === b:", a === b); // Output: false (because types are different)

// Not equal to (!=) - compares values (loose inequality)
console.log("a != c:", a != c); // Output: true (because 10 is not equal to 5)

// Strictly not equal to (!==) - compares values and types (strict inequality)
console.log("a !== b:", a !== b); // Output: true (because types are different)

// Greater than (>)
console.log("a > c:", a > c); // Output: true (10 is greater than 5)

// Less than (<)
console.log("c < a:", c < a); // Output: true (5 is less than 10)

// Greater than or equal to (>=)
console.log("a >= b:", a >= b); // Output: true (10 is equal to "10" in value)

// Less than or equal to (<=)
console.log("c <= a:", c <= a); // Output: true (5 is less than 10)
