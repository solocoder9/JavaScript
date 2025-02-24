// Declaring string variables
let firstName = "John";
let lastName = "Doe";

// Concatenation (+) - Combines two strings
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName); // Output: John Doe

// Concatenation assignment (+=) - Appends to an existing string
let greeting = "Hello";
greeting += ", " + firstName;
console.log("Concatenation Assignment:", greeting); // Output: Hello, John

// Equal to (==) - Compares values (loose equality)
console.log("firstName == 'John':", firstName == "John"); // Output: true

// Not equal to (!=) - Checks if values are different
console.log("firstName != 'Jane':", firstName != "Jane"); // Output: true

// Greater than (>) - Lexicographical comparison
console.log("'apple' > 'banana':", "apple" > "banana"); // Output: false (because 'a' comes before 'b')

// Less than (<) - Lexicographical comparison
console.log("'abc' < 'abd':", "abc" < "abd"); // Output: true (because 'c' comes before 'd')
