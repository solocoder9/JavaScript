// Example 1: Using 'continue' in a for loop (Skip number 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping:", i);
        continue; // Skip iteration when i is 3
    }
    console.log(i); // Output: 1 2 Skipping: 3 4 5
}