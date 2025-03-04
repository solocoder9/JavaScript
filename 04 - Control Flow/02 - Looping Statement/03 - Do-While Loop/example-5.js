// Example 5: Using do-while loop with break (Stop loop when i reaches 3)
let x = 1;
do {
    if (x === 3) {
        console.log("Loop stopped at:", x);
        break; // Exit the loop
    }
    console.log(x); // Output: 1 2 Loop stopped at: 3
    x++;
} while (x <= 5);