// Example 2: Using 'continue' in a while loop (Skip 4)
let x = 1;
while (x <= 5) {
    if (x === 4) {
        console.log("Skipping:", x);
        x++; // Increment before continuing to avoid an infinite loop
        continue;
    }
    console.log(x); // Output: 1 2 3 Skipping: 4 5
    x++;
}