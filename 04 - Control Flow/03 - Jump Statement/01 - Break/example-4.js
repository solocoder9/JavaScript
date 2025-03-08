// Example 4: Using 'break' inside a switch case
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break; // Exits the switch statement
    case "Wednesday":
        console.log("Middle of the week");
        break;
    default:
        console.log("Another day");
}
// Output: "Second day of the week"