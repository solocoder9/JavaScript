// Objects in JavaScript are collections of key-value pairs

// Creating an object using object literal
let student = {
    name: "Alice",      // String property
    age: 22,           // Number property
    isEnrolled: true,  // Boolean property
    subjects: ["Math", "Science"], // Array property
    address: {         // Nested object
      city: "New York",
      zip: 10001
    },
    greet: function () { // Method inside object
      console.log("Hello, my name is", this.name);
    }
  };