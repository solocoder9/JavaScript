// Example 5: Using 'break' inside a nested loop (Stops the outer loop)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking out of loops at i =", i, "j =", j);
            break; // Breaks the inner loop
        }
        console.log("i =", i, "j =", j);
    }
}
// Output:
// i = 1 j = 1
// i = 1 j = 2
// i = 1 j = 3
// i = 2 j = 1
// Breaking out of loops at i = 2 j = 2
// i = 3 j = 1
// i = 3 j = 2
// i = 3 j = 3