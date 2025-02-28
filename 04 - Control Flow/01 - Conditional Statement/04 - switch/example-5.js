// Example 5: Checking the grade based on marks range
let marks = 85;

switch (true) {
    case marks >= 90:
        console.log("Grade: A+");
        break;
    case marks >= 80:
        console.log("Grade: A"); // Output: Grade: A
        break;
    case marks >= 70:
        console.log("Grade: B");
        break;
    case marks >= 60:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
}