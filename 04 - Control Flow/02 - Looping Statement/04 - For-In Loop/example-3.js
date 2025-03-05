// Example 3: Using for...in with an array of objects
let students = [
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

for (let index in students) {
    console.log(`${students[index].name} is ${students[index].age} years old`);
}
// Output:
// Bob is 22 years old
// Charlie is 21 years old