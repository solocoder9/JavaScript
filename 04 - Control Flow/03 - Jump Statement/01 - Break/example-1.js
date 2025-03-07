// Example 1: Using 'break' in a for loop (Stop loop when i reaches 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Loop stopped at:", i);
        break; // Exit the loop
    }
    console.log(i); // Output: 1 2 Loop stopped at: 3
}