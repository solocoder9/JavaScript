// Example 4: Using for...in to count object properties
let book = {
    title: "JavaScript Essentials",
    author: "John Doe",
    pages: 250
};

let count = 0;
for (let key in book) {
    count++;
}
console.log(`The book object has ${count} properties.`);
// Output: The book object has 3 properties.