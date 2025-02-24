// Declaring two numbers
let a = 5;  // Binary: 0101
let b = 1;  // Binary: 0001

// Bitwise AND (&) - Sets each bit to 1 if both bits are 1
console.log("a & b:", a & b); // Output: 1 (0101 & 0001 → 0001)

// Bitwise OR (|) - Sets each bit to 1 if at least one bit is 1
console.log("a | b:", a | b); // Output: 5 (0101 | 0001 → 0101)

// Bitwise XOR (^) - Sets each bit to 1 if only one bit is 1
console.log("a ^ b:", a ^ b); // Output: 4 (0101 ^ 0001 → 0100)

// Bitwise NOT (~) - Inverts all bits (flips 0s to 1s and vice versa)
console.log("~a:", ~a); // Output: -6 (in 32-bit representation)

// Left Shift (<<) - Shifts bits to the left, filling with 0s
console.log("a << 1:", a << 1); // Output: 10 (0101 << 1 → 1010)

// Right Shift (>>) - Shifts bits to the right, preserving the sign
console.log("a >> 1:", a >> 1); // Output: 2 (0101 >> 1 → 0010)

// Unsigned Right Shift (>>>) - Shifts bits to the right, filling with 0s
let c = -5;
console.log("c >>> 1:", c >>> 1); // Output: 2147483645 (removes the sign bit)
