// 1. Number.isFinite()
console.log(Number.isFinite(25));

// 2. Number.isInteger()
console.log(Number.isInteger(10.5));

// 3. Number.isNaN()
console.log(Number.isNaN(NaN));

// 4. Number.isSafeInteger()
console.log(Number.isSafeInteger(100));

// 5. Number.parseInt()
console.log(Number.parseInt("45.78"));

// 6. Number.parseFloat()
console.log(Number.parseFloat("45.78"));



// 1:

let batteryLevel = 15;
if (batteryLevel < 20) {
    console.log("Low battery! Please charge your device.");
}

batteryLevel = 80;

if (batteryLevel < 20) {
    console.log("Low battery! Please charge your device.");
}


// 2:

const ticketPrice = "2500";
const ticketCount = 3;
const budget = 10000;

const price = Number(ticketPrice);

const totalCost = price * ticketCount;

console.log(totalCost.toFixed(2));

if (totalCost <= budget) {
    console.log("Booking affordable");
} else {
    console.log("Not enough money");
}


// 3:

const measurement = 7.68;

console.log(Math.round(measurement));

console.log(Math.floor(measurement));

console.log(Math.ceil(measurement));

console.log(Math.max(28, 93, 16));

console.log(Math.min(28, 93, 16));


// 4:

let hasLibraryCard = true;
let hasGuestPass = false;
let isSuspended = false;

let canEnter = (hasLibraryCard || hasGuestPass) && !isSuspended;

if (canEnter) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Testing another outcome

hasLibraryCard = false;
hasGuestPass = false;

canEnter = (hasLibraryCard || hasGuestPass) && !isSuspended;

if (canEnter) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


// Task 5:

let distance = 4;

if (distance >= 0 && distance <= 5) {
    console.log("Delivery: ₦500");
} else if (distance > 5 && distance <= 15) {
    console.log("Delivery: ₦1,000");
} else {
    console.log("Delivery unavailable");
}

distance = 12;

if (distance >= 0 && distance <= 5) {
    console.log("Delivery: ₦500");
} else if (distance > 5 && distance <= 15) {
    console.log("Delivery: ₦1,000");
} else {
    console.log("Delivery unavailable");
}

distance = 20;

if (distance >= 0 && distance <= 5) {
    console.log("Delivery: ₦500");
} else if (distance > 5 && distance <= 15) {
    console.log("Delivery: ₦1,000");
} else {
    console.log("Delivery unavailable");
}


// Read-up: Number Methods

// 1. Number.isFinite()
// Checks if a value is a finite number.

console.log(Number.isFinite(25));


// 2. Number.isInteger()
// Checks if a number is a whole number.

console.log(Number.isInteger(10));


// 3. Number.isNaN()
// Checks if a value is NaN (Not a Number).

console.log(Number.isNaN(NaN));


// 4. Number.isSafeInteger()
// Checks if a number is a safe integer.

console.log(Number.isSafeInteger(100));


// 5. Number.parseInt()
// Converts a string into a whole number.

console.log(Number.parseInt("45.78"));


// 6. Number.parseFloat()
// Converts a string into a decimal number.

console.log(Number.parseFloat("45.78"));


// CLASS TASK: Create a programme that checks a parcel’s weight.

// Delivery charges:
// -----------------------------------------------
// Weight	                   |     Charge.      |
// -----------------------------------------------
// Above 0 kg and up to 2 kg  |    ₦1,500        |
// Above 2 kg and up to 5 kg  |    ₦3,000        |
// Above 5 kg	               |    ₦5,000        |
// -----------------------------------------------
// Task: Use if, else if, and else to display the correct charge. Display "Invalid weight" if the weight is zero or negative.


let weight = 6; 
if (weight > 15) {
    console.log("Invalid weight");
}
else if (weight > 0 && weight <= 2) {
    console.log("Delivery: ₦1,500");
} else if (weight > 2 && weight <= 5) {
    console.log("Delivery: ₦3,000");
} else if (weight > 5) {
    console.log("Delivery: ₦5,000");
} else {
    console.log("Invalid weight");
}

// Task 1: Collect Student Information
// Using prompt(), ask the user to enter:
// 1. Student's full name.
// 2. Student's examination score (between 0 and 100).
// Instructions:
// - Store the student's name in a variable called studentName.
// - Store the examination score in a variable called score.
// - Use Number() to convert the score to a number.
// Task 2: Determine the Student's Grade
// Using if...else if...else, determine the student's grade according to the following criteria:
// Score	Grade	Remark
// 70–100	A	Excellent
// 60–69	B	Very Good
// 50–59	C	Good
// 40–49	D	Fair
// 0–39	F	Fail
// Requirements:
// 1. Create variables called grade and remark.
// 2. Use conditional statements to assign the appropriate values.
// 3. Ensure that the correct grade is assigned based on the student's score.
// Task 3: Determine Pass or Fail
// Using a separate if...else statement:
// - If the student's score is 40 or above, display "Congratulations! You passed."
// - Otherwise, display "Unfortunately, you failed. Please try again."
// Store the result in a variable called status.

let studentname = prompt("Enter your full name");
let score = Number(prompt("Enter your examination score (between 0 and 100)"));

let grade;
let remark;

if (score >= 70 && score <= 100) {
    grade = "A";
    remark = "Excellent";
}
else if (score >= 60 && score <= 69) {
    grade = "B";
    remark = "Very Good";
}
else if (score >= 50 && score <= 59) {
    grade = "C";
    remark = "Good";
}
else if (score >= 40 && score <= 49) {
    grade = "D";
    remark = "Fair";
}
else if (score >= 0 && score <= 39) {
    grade = "F";
    remark = "Fail";
}

let status;
if (score >= 40) {
    status = "Congratulations! You passed.";
} else {
    status = "Unfortunately, you failed. Please try again.";
}
