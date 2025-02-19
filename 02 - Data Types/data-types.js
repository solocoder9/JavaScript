// Primitive Data Types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// Use 'typeof' operator to know the datatypes

let str = "Hello, world!"; // String: represents a sequence of characters
let num = 42; // Number: represents both integers and floating-point numbers
let isTrue = true; // Boolean: represents a logical value, either true or false
let emptyValue = null; // null: represents the absence of a value or object
let undefinedValue; // undefined: represents a variable that has been declared but not assigned a value
let sym = Symbol('id'); // Symbol: represents a unique and immutable value, often used for object properties
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt: represents large integers beyond the safe range for numbers

console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof emptyValue); // "object" (this is a historical bug in JavaScript)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntValue); // "bigint"

console.log();
// Non-Primitive Data Types (Reference Types)
// Array, Object, Function

let arr = [1, 2, 3, 4]; // Array: represents a list of values
let obj = { name: "John", age: 30 }; // Object: represents a collection of key-value pairs
let myFunc = function() { console.log("Hello!"); }; // Function: represents a block of reusable code

console.log(typeof arr); // "object" (Arrays are technically objects in JavaScript)
console.log(typeof obj); // "object"
console.log(typeof myFunc); // "function" (Functions are a special kind of object)

// Modifying values in non-primitive types
arr[0] = 10; // Arrays are mutable
obj.name = "Jane"; // Objects are mutable
myFunc = function() { console.log("Hello, world!"); }; // Functions are also mutable

console.log(arr); // [10, 2, 3, 4]
console.log(obj); // { name: "Jane", age: 30 }
myFunc(); // "Hello, world!"

