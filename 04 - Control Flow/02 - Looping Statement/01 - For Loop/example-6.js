// Example 6: Using 'for' loop with break (Stop loop when i is 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Loop stopped at:", i);
        break; // Exit the loop
    }
    console.log(i); // Output: 1 2 Loop stopped at: 3
}