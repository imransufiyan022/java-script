// TASK 1: MOVIE TICKET ELIGIBILITY

let customerAge = prompt("Enter your age:");

if (customerAge === "" || customerAge === null || isNaN(customerAge) || Number(customerAge) < 0) {
    console.log("Invalid age");
} else {
    customerAge = Number(customerAge);

    let ticketMessage = customerAge <= 12
        ? "Children's discount applied!"
        : "Regular ticket price applies.";

    console.log(ticketMessage);
}


// TASK 2: RESTAURANT FOOD ORDERING SYSTEM

console.log("Welcome to FreshBite Restaurant!");

let food = prompt("Enter your food option: rice, beans, yam or spaghetti");

if (food !== null) {
    food = food.toLowerCase().trim();
}

switch (food) {
    case "rice":
        console.log("Selected Meal: Rice");
        console.log("Price: ₦3500");
        console.log("Thank you for your order!");
        break;

    case "beans":
        console.log("Selected Meal: Beans");
        console.log("Price: ₦2500");
        console.log("Thank you for your order!");
        break;

    case "yam":
        console.log("Selected Meal: Yam");
        console.log("Price: ₦3000");
        console.log("Thank you for your order!");
        break;

    case "spaghetti":
        console.log("Selected Meal: Spaghetti");
        console.log("Price: ₦4000");
        console.log("Thank you for your order!");
        break;

    default:
        console.log("Sorry, this meal is unavailable.");
}


// TASK 3: STUDENT SCHOLARSHIP CHECKER

let studentName = prompt("Enter your full name:");

let scoreInput = prompt("Enter your examination score:");

let attendanceInput = prompt("Enter your attendance percentage:");

let score = Number(scoreInput);
let attendance = Number(attendanceInput);

if (
    scoreInput === null ||
    attendanceInput === null ||
    scoreInput.trim() === "" ||
    attendanceInput.trim() === "" ||
    !Number.isFinite(score) ||
    !Number.isFinite(attendance) ||
    score < 0 ||
    score > 100 ||
    attendance < 0 ||
    attendance > 100
) {
    console.log("Invalid score or attendance");
} else {
    console.log("Student Name: " + studentName);
    console.log("Examination Score: " + score);
    console.log("Attendance: " + attendance + "%");

    if (score >= 80 && attendance >= 90) {
        console.log("Congratulations! You qualify for a scholarship.");
    } else {
        console.log("You do not qualify for a scholarship.");
    }
}