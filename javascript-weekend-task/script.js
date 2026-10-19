// PART A — FOR LOOP

// Task 1: Countdown from 20 to 1

for (let i = 20; i >= 1; i--) {
    console.log(i);
}


// Task 2a: Odd numbers from 11 to 25

for (let i = 11; i <= 25; i += 2) {
    console.log(i);
}


// Task 2b: Even numbers from 10 to 30

for (let i = 10; i <= 30; i += 2) {
    console.log(i);
}


// Task 3: Sum of numbers from 1 to 20

let total1 = 0;

for (let i = 1; i <= 20; i++) {
    total1 += i;
}

console.log(total1);


// Task 4: Break and Continue

for (let i = 1; i <= 15; i++) {

    if (i === 4) {
        continue;
    }

    if (i === 12) {
        break;
    }

    console.log(i);
}


// Task 5: Loop through a string

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
    console.log(language[i]);
}



// PART B — WHILE LOOP

// Task 6: Countdown from 15 to 5

let count1 = 15;

while (count1 >= 5) {
    console.log(count1);
    count1--;
}


// Task 7: Sum of even numbers from 2 to 20

let count2 = 2;
let total2 = 0;

while (count2 <= 20) {
    total2 += count2;
    count2 += 2;
}

console.log(total2);


// Task 8: Break and Continue

let count3 = 1;

while (count3 <= 10) {

    if (count3 === 5) {
        count3++;
        continue;
    }

    if (count3 === 9) {
        break;
    }

    console.log(count3);
    count3++;
}


// Task 9: Password Checker

let password = prompt("Enter your password:");

while (password !== "learn123") {
    password = prompt("Wrong password! Try again:");
}

alert("Access granted!");



// PART C — DO...WHILE LOOP

// Task 10: Display a message five times

let count4 = 1;

do {
    console.log("I am learning JavaScript!");
    count4++;
} while (count4 <= 5);


// Task 11: Secret Word

let secretWord;

do {
    secretWord = prompt("Enter the secret word:");
} while (secretWord !== "coding");

alert("Correct word!");


// Task 12: A False Condition

let isLearning = false;

do {
    console.log("Keep learning!");
} while (isLearning === true);

// The message appears once because a do...while loop
// executes at least once even when the condition is false.



// PART D — FOR...OF LOOP

// Task 13: Loop through first name

let firstName = "Imran";

for (let letter of firstName) {
    console.log(letter);
}


// Task 14: Loop through an array of phone brands

let phoneBrands = [
    "Samsung",
    "Apple",
    "Tecno",
    "Infinix",
    "Xiaomi"
];

for (let brand of phoneBrands) {
    console.log(brand);
}


// Task 15: Calculate total prices

let prices = [1500, 2000, 3500, 1000, 2500];

let totalPrices = 0;

for (let price of prices) {
    totalPrices += price;
}

console.log(totalPrices);



// PART E — CONDITIONAL STATEMENTS

// Task 16: Check Voting Eligibility

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// Task 17: Nested if...else — Student Discount

// Test A
let isStudent = true;
let purchaseAmount = 6000;

if (isStudent) {

    if (purchaseAmount >= 5000) {
        console.log("You get a 10% discount!");
    } else {
        console.log("Spend at least ₦5,000 to get a discount.");
    }

} else {
    console.log("This discount is for students only.");
}


// Test B
isStudent = true;
purchaseAmount = 3000;

if (isStudent) {

    if (purchaseAmount >= 5000) {
        console.log("You get a 10% discount!");
    } else {
        console.log("Spend at least ₦5,000 to get a discount.");
    }

} else {
    console.log("This discount is for students only.");
}


// Test C
isStudent = false;
purchaseAmount = 6000;

if (isStudent) {

    if (purchaseAmount >= 5000) {
        console.log("You get a 10% discount!");
    } else {
        console.log("Spend at least ₦5,000 to get a discount.");
    }

} else {
    console.log("This discount is for students only.");
}


// Task 18: Ternary Operator — Check a Score

// Test A
let score = 65;

let result = score >= 50 ? "Passed" : "Failed";

console.log(result);


// Test B
score = 40;

result = score >= 50 ? "Passed" : "Failed";

console.log(result);


// Test C
score = 50;

result = score >= 50 ? "Passed" : "Failed";

console.log(result);