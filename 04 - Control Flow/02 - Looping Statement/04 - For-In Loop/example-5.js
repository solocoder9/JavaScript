// Example 5: Skipping inherited properties
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.gender = "Male";

let person = new Person("David", 30);

for (let key in person) {
    if (person.hasOwnProperty(key)) { // Checking only own properties
        console.log(`${key}: ${person[key]}`);
    }
}
// Output:
// name: David
// age: 30