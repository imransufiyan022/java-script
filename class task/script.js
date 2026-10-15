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



// Practical Lab 1 — for Loop
// Lab 1: Display Numbers and Calculate a Sum

// 1. Write a for loop that displays numbers
//    from 1 to 10.

// 2. Write another for loop that displays
//    numbers from 10 to 1.

// 3. Write a for loop that displays odd
//    numbers from 1 to 15.

// 4. Write a for loop that displays
//    "I love JavaScript" five times.

// 5. Write a for loop that displays even
//    numbers from 2 to 20.

// 6. Use a for loop to calculate the sum of
//    numbers from 1 to 10.
//    Hint: Create a variable named sum with an initial
//    value of 0. Add each number to sum inside the loop.
//    Display the final sum after the loop ends.
// 7. Using break:
//    Write a for loop that counts from 1 to 10.
//    Stop the loop when the number reaches 6,
//    without displaying 6.
//    Expected output: 1, 2, 3, 4, 5.

// 8. Using continue:
//    Write a for loop that displays numbers from 1 to 10,
//    but skips 5.
//    Expected output: 1, 2, 3, 4, 6, 7, 8, 9, 10.

// 9. Using break and continue:
//    Write a for loop that counts from 1 to 15.
//    Use continue to skip even numbers.
//    Use break to stop when the number reaches 11,
//    without displaying 11.
//    Expected output: 1, 3, 5, 7, 9.


// 1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2
for (let i = 10; i >= 1; i--) {
    console.log(i);
    
}
// 3
for (let i = 1; i <= 15; i+=2) {
    console.log(i);
    
}
// 4
for (let i = 1; i <= 5; i++) {
    console.log("i love javascript");
    
}
// 5
for (let i = 2; i <= 20; i+=2 ) {
    console.log(i);
    
}
// 6
let total = 0;

for(let i = 1; i <= 10; i++) {
    total = total + i
    console.log(total);
    
}
// 7
 for ( let i = 1; i <= 10; i++) {

     if (i === 6) {         break;
     }

      console.log(i);
    
}

// 8
 for ( let i = 1; i <= 10; i++) {

     if (i === 5) {         continue;
     }

      console.log(i);
    
}
// 9
 for ( let i = 1; i <= 15; i++) {

     if (i % 2 === 0) { continue;

     }
    
     if (i === 11) {
        break;
    }
    
      console.log(i);
    
}