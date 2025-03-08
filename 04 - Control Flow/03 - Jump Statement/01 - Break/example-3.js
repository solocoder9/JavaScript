// Example 3: Using 'break' in a do-while loop (Stop at 5)
let num = 1;
do {
    if (num === 5) {
        console.log("Loop stopped at:", num);
        break;
    }
    console.log(num); // Output: 1 2 3 4 Loop stopped at: 5
    num++;
} while (num <= 10);