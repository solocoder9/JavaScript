// Example 5: Using for...of with an array of objects
let students = [
    { name: "David", age: 22 },
    { name: "Emma", age: 21 }
];

for (let student of students) {
    console.log(`${student.name} is ${student.age} years old`);
}
// Output:
// David is 22 years old
// Emma is 21 years old