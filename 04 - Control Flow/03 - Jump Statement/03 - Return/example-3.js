// Example 3: Function with multiple return statements
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F"; // Default return if no conditions match
}

console.log(getGrade(85)); // Output: B
console.log(getGrade(55)); // Output: F