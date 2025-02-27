// Example 2: Checking a user's role
let role = "editor";

switch (role) {
    case "admin":
        console.log("You have full access.");
        break;
    case "editor":
        console.log("You can edit content."); // Output: You can edit content.
        break;
    case "viewer":
        console.log("You can only view content.");
        break;
    default:
        console.log("Invalid role.");
}
