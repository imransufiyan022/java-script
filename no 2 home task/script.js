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


let weight = 3; 
if (weight > 0 && weight <= 2) {
    console.log("Delivery: ₦1,500");
} else if (weight > 2 && weight <= 5) {
    console.log("Delivery: ₦3,000");
} else if (weight > 5) {
    console.log("Delivery: ₦5,000");
} else {
    console.log("Invalid weight");
}

