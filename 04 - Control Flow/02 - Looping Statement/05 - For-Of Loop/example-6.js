// Example 6: Using for...of with Object.keys() to iterate over object keys
let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 300
};

for (let key of Object.keys(book)) {
    console.log(`${key}: ${book[key]}`);
}
// Output:
// title: JavaScript Guide
// author: John Doe
// pages: 300