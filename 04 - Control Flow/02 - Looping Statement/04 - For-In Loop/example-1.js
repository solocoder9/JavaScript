// Example 1: Using for...in with an object
let student = {
    name: "Alice",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Output:
// name: Alice
// age: 20
// grade: A