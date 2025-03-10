// Example 4: Using 'continue' in a nested loop (Skip when j = 2)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("Skipping j =", j, "for i =", i);
            continue; // Skip inner loop iteration when j is 2
        }
        console.log("i =", i, "j =", j);
    }
}
// Output:
// i = 1 j = 1
// Skipping j = 2 for i = 1
// i = 1 j = 3
// i = 2 j = 1
// Skipping j = 2 for i = 2
// i = 2 j = 3
// i = 3 j = 1
// Skipping j = 2 for i = 3
// i = 3 j = 3