// Example 6: Using do-while loop with continue (Skip number 3)
let y = 1;
do {
    if (y === 3) {
        y++; // Important: Increment before continue to avoid infinite loop
        continue; // Skip iteration when y is 3
    }
    console.log(y); // Output: 1 2 4 5
    y++;
} while (y <= 5);