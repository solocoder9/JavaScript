// Example 2: Returning early from a function
function checkAge(age) {
    if (age < 18) {
        return "Access Denied"; // Stops execution and returns the message
    }
    return "Access Granted";
}