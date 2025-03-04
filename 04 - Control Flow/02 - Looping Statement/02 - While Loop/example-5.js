// Example 5: Using while loop with break (Stop loop when i reaches 3)
let x = 1;
while (x <= 5) {
    if (x === 3) {
        console.log("Loop stopped at:", x);
        break; // Exit the loop
    }
    console.log(x); // Output: 1 2 Loop stopped at: 3
    x++;
}