// Example 7: Demonstrating the difference between while and do-while
let a = 10;
while (a < 5) {
    console.log("Inside while loop");
} // Output: (Nothing, because the condition is false initially)

let b = 10;
do {
    console.log("Inside do-while loop"); // Output: "Inside do-while loop"
} while (b < 5);