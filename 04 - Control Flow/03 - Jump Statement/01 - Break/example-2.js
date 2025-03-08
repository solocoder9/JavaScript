// Example 2: Using 'break' in a while loop (Stop when x reaches 4)
let x = 1;
while (x <= 5) {
    if (x === 4) {
        console.log("Loop stopped at:", x);
        break; // Exit the loop
    }
    console.log(x); // Output: 1 2 3 Loop stopped at: 4
    x++;
}