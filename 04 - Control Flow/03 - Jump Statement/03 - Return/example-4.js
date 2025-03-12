// Example 4: Using return to stop function execution
function testReturn() {
    console.log("Before return");
    return; // Exits the function immediately
    console.log("After return"); // This line is never executed
}

testReturn(); // Output: Before return