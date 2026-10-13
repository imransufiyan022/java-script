// JavaScript Class Task: Numbers and Math Methods

// Create a file named `numbers-task.js`. Complete the tasks below and display each result using `console.log()`.

// 1. Practise mathematical operators

// Declare these variables:

// js
// const firstNumber = 25;
// const secondNumber = 4;


// Use mathematical operators to:

// 1. Add the two numbers.
// 2. Subtract `secondNumber` from `firstNumber`.
// 3. Multiply the two numbers.
// 4. Divide `firstNumber` by `secondNumber`.
// 5. Find the remainder when `firstNumber` is divided by `secondNumber`.
// 6. Raise `secondNumber` to the power of `3`.

const firstNumber = 25;
const secondNumber = 4;
const add = firstNumber + secondNumber;
console.log(add);

const subtract = firstNumber - secondNumber;
console.log(subtract);

const multiply = firstNumber * secondNumber;
console.log(multiply);

const divide = firstNumber / secondNumber;
console.log(divide);

const remainder = firstNumber % secondNumber;
console.log(remainder);

const power = Math.pow(secondNumber, 3);
console.log(power);
// ----------------------------------------------------------------------------

// 2. Increase and decrease numbers

// js
// let score = 10;


// 1. Increase `score` by `1` using `++` and display it.
// 2. Increase the updated score by `5` using `+=` and display it.
// 3. Decrease the updated score by `1` using `--` and display it.
// 4. Decrease the updated score by `3` using `-=` and display it.

let score = 10;
score++;
console.log(score);

score += 5;
console.log(score);

score--;
console.log(score);

score -= 3;
console.log(score);
// -----------------------------------------------------------------------------
// 3. Practise Math methods

// js
// const price = 18.75;
// const negativeNumber = -45;

// 1. Round `price` to the nearest whole number.
// 2. Round `price` down.
// 3. Round `price` up.
// 4. Remove the decimal part of `price`.
// 5. Find the absolute value of `negativeNumber` using `Math.abs()`.
// 6. Find the greatest number among `12`, `45`, and `7`.
// 7. Find the smallest number among `12`, `45`, and `7`.
// 8. Calculate `5` raised to the power of `2` using `Math.pow()`.
// 9. Find the square root of `81`.
// 10. Generate a random number using `Math.random()`.
  
const price = 18.75;
const negativeNumber = -45;
console.log(Math.round(price));
console.log(Math.floor(price));
console.log(Math.ceil(price));
console.log(Math.trunc(price));
console.log(Math.abs(negativeNumber));
console.log(Math.max(12, 45, 7));
console.log(Math.min(12, 45, 7));
console.log(Math.pow(5, 2));
console.log(Math.sqrt(81));
console.log(Math.random());
// -----------------------------------------------------------------------------
// 4. Predict, then check

// Write your predicted answers as comments before running:

// js
// console.log(5 + 2 * 3);
// console.log((5 + 2) * 3);


// Explain why the results are different.

// Reminder: Multiplication, division, and remainder have equal precedence and are evaluated from left to right. Addition and subtraction also have equal precedence and are evaluated from left to right.


console.log(5 + 2 * 3); // 11
console.log((5 + 2) * 3); // 21

// the results are different because in the first console the multiplication is first while in the second console the addition is first