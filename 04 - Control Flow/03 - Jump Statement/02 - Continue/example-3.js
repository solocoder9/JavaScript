// Example 3: Using 'continue' in a do-while loop (Skip 2)
let num = 0;
do {
    num++;
    if (num === 2) {
        console.log("Skipping:", num);
        continue; // Skip number 2
    }
    console.log(num); // Output: 1 Skipping: 2 3 4 5
} while (num < 5);