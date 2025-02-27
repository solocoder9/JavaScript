// Example 4: Checking the type of a triangle
let side1 = 5, side2 = 5, side3 = 5;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle"); // Output: Equilateral Triangle
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}