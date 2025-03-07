// Example 4: Using for...of with a Map
let studentMarks = new Map([
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78]
]);

for (let [name, marks] of studentMarks) {
    console.log(`${name}: ${marks}`);
}
// Output:
// Alice: 85
// Bob: 90
// Charlie: 78