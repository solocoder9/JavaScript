// Example 7: Using 'for' loop with continue (Skip number 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i is 3
    }
    console.log(i); // Output: 1 2 4 5
}
