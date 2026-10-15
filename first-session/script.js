console.log("imran");

document.getElementById("my-name").textContent = "I am your father mr bean"

console.log("i am learning javascript")
document.getElementById('one').textContent = "Form validation"
document.getElementById('two').textContent = "handle users events"
document.getElementById('three').textContent = "manipulates webpage"


const first_name = "imran";
console.log(first_name);

const last_name = "sufiyan";
console.log(last_name);

const country = "nigeria";
console.log(country);

let currentscore = 20;
    currentscore = 35;
    console.log(currentscore)

    // studentname
    // score1st
    // total_name

    // studentName the "s" is small letter
    // StudentName the "s" is capital letter 

// string
    let game = "chess";
    console.log(game);
// numbers
const arrangement = 30;
console.log(arrangement);
//  boolean
let ishethethief = false;
console.log(ishethethief);
// null
const nameofboss = null;
console.log(nameofboss);


// array
const favoritefood = ["jollof", "semo", "amala", "noodles"]
console.log(favoritefood[0]);
console.log(favoritefood[3]);

// object
const student = {
    name: "Imran",
    age: 18,
    course: "fullstack",
    haspaid: "true"
}
console.log(student.name);
console.log(student.course);

student.age = 23;
console.log(student.age)

console.log(typeof game);
console.log(typeof arrangement);
console.log(typeof ishethethief);

// ---------
// 12th Ocotber 2026

// 7. includes()
// Checks whether a string contains a particular text and returns a boolean value.
const brand = "Nike";
console.log(brand.includes("i"));

// We can also specify the index value from which to start a search: 
const fruit = "mango";
console.log(fruit.includes("n", 1));

// 8. replace()
// Takes out value to be replaced and replaces it with another.
const statement = "Hello World!";
console.log(statement.replace("World", "Dear"));

// 9. replaceAll()
// Replaces every occurrence of matching text.
const sentence = "Tola, your namesake Tola is here."
console.log(sentence.replaceAll("Tola", "Fawaz"));

// 10. repeat()
// Helps us to repeat a value
const rating = "*";
console.log(rating.repeat(5));

// 11. split()
// To divide/section values.
const fruits = "apple";
console.log(fruits.split(""));

// 12. startsWith() and endsWith()
// StartsWith(): Checks whether a string begins with particular text.
// EndsWith(): Checks whether a string ends with particular text.
// Both returns a boolean result.
const word1 = "brain drain";
console.log(word1.startsWith("brain"));
console.log(word1.endsWith("drain"));

// 13. padStart() and padEnd()
// padStart() adds padding at the beginning until the string reaches a specified total length.
// Syntax:
// string.padStart(targetLength, paddingText)

// 14. padEnd() works like padStart(), but adds padding at the end.
// string.padEnd(targetLength, paddingText)
const word2 = "chocolate";
console.log(word2.padStart(16, "brownie"));
console.log(word2.padEnd(25, "yummy"));

// 15. charAt()
// charAt() — Get a Character
// charAt() returns the character at a specified index.
// Indexes start at 0, and spaces count.
const msgg = "Tell me more";
console.log(msgg.charAt(9)); //deals with the index to get to the character.
console.log(msgg.indexOf("o")); // deals with the character to get to the index.

// 17. substring() — Extract Part of a String
// substring() extracts text between two indexes.
// string.substring(startIndex, endIndex)
const real = "rule your world";
console.log(real.substring(5, 12));

// 18. concat() — Join Strings
// concat() joins strings together.
const firstWord = "Tech";
const secondWord = "Studio";
console.log(firstWord.concat(" ", secondWord));
// It does not automatically add spaces. We have included a space as another argument.


// QUICK REVIEW OF ALL THE STRING METHODS COVERED
// | Method           | Purpose                                               |
// |------------------|-------------------------------------------------------|
// | `toUpperCase()`  | Converts text to uppercase                            |
// | `toLowerCase()`  | Converts text to lowercase                            |
// | `trim()`         | Removes whitespace from both ends                     |
// | `trimStart()`    | Removes whitespace from the beginning                 |
// | `trimEnd()`      | Removes whitespace from the end                       |
// | `includes()`     | Checks whether particular text is present             |
// | `indexOf()`      | Finds the starting index of the first match           |
// | `lastIndexOf()`  | Finds the starting index of the last match            |
// | `charAt()`       | Gets the character at a specified index               |
// | `slice()`        | Extracts text, excluding the ending index             |
// | `substring()`    | Extracts text, excluding the ending index             |
// | `replace()`      | Replaces the first match when searching with a string |
// | `replaceAll()`   | Replaces every match                                  |
// | `startsWith()`   | Checks whether a string begins with particular text   |
// | `endsWith()`     | Checks whether a string ends with particular text     |
// | `split()`        | Splits a string into an array                         |
// | `repeat()`       | Repeats a string a specified number of times          |
// | `padStart()`     | Adds padding at the beginning to reach a target total length |
// | `padEnd()`       | Adds padding at the end to reach a target total length |
// | `concat()`       | Joins strings together                                 |
// -------------------------------------------------------------------------------


// | Method             | Example |
// |--------------------|------------------------------------------|
// | `toUpperCase()`    | `"Hello".toUpperCase()`                  |
// | `toLowerCase()`    | `"Hello".toLowerCase()`                  |
// | `trim()`           | `" Hi ".trim()`                          |
// | `trimStart()`      | `" Hi ".trimStart()`                     |
// | `trimEnd()`        | `" Hi ".trimEnd()`                       |
// | `includes()`       | `"Hello".includes("ell")`                |
// | `indexOf()`        | `"banana".indexOf("a")`                  |
// | `lastIndexOf()`    | `"banana".lastIndexOf("a")`              |
// | `charAt()`         | `"Hello".charAt(1)`                      |
// | `slice()`          | `"JavaScript".slice(0, 4)`               |
// | `substring()`      | `"JavaScript".substring(4, 10)`          |
// | `replace()`        | `"Hi Ada Ada".replace("Ada", "Tola")`    |
// | `replaceAll()`     | `"Hi Ada Ada".replaceAll("Ada", "Tola")` |
// | `startsWith()`     | `"JavaScript".startsWith("Java")`        |
// | `endsWith()`       | `"index.html".endsWith(".html")`         |
// | `split()`          | `"HTML CSS".split(" ")`                  |
// | `repeat()`         | `"Hi".repeat(3)`                         |
// | `padStart()`       | `"7".padStart(3, "0")`                   |
// | `padEnd()`         | `"Hi".padEnd(5, "*")`                    |
// | `concat()`         | `"Tech".concat(" ", "Studio")`           |


// | Example                                   | Result               |
// |-------------------------------------------|----------------------|
// | `"Hello".toUpperCase()`                   | `"HELLO"`            |
// | `"Hello".toLowerCase()`                   | `"hello"`            |
// | `" Hi ".trim()`                           | `"Hi"`               |
// | `" Hi ".trimStart()`                      | `"Hi "`              |
// | `" Hi ".trimEnd()`                        | `" Hi"`              |
// | `"Hello".includes("ell")`                 | `true`               |
// | `"banana".indexOf("a")`                   | `1`                  |
// | `"banana".lastIndexOf("a")`               | `5`                  |
// | `"Hello".charAt(1)`                       | `"e"`                |
// | `"JavaScript".slice(0, 4)`                | `"Java"`             |
// | `"JavaScript".substring(4, 10)`           | `"Script"`           |
// | `"Hi Ada Ada".replace("Ada", "Tola")`     | `"Hi Tola Ada"`      |
// | `"Hi Ada Ada".replaceAll("Ada", "Tola")`  | `"Hi Tola Tola"`     |
// | `"JavaScript".startsWith("Java")`         | `true`               |
// | `"index.html".endsWith(".html")`          | `true`               |
// | `"HTML CSS".split(" ")`                   | `["HTML", "CSS"]`    |
// | `"Hi".repeat(3)`                          | `"HiHiHi"`           |
// | `"7".padStart(3, "0")`                    | `"007"`              |
// | `"Hi".padEnd(5, "*")`                     | `"Hi***"`            |
// | `"Tech".concat(" ", "Studio")`            | `"Tech Studio"`      |



// STRING CONCATENATION
// Concatenation means joining strings together.
// 1. Using the + Operator
// JavaScript does not automatically add a space between the strings.
// To include a space, add " ":
const one = "Pounded";
const two = "yam";
const both = one + " " + two;
console.log(both);

// 2. Joining Text and Variables
const course = "Fullstack web development";
const academy = "Tech Studio";
const stName = "Imran";
// Imran studies fullstack web development at Tech Studio
const info = stName + " studies " + course + " at " + academy + "."
console.log(info);
// Fixed text must be in quotation marks while the variables can stand without being in quotation marks. 

// Using concat() 
const nextInfo = stName.concat(" learns ", course, " at ", academy, ".")
console.log(nextInfo);


// 3. Joining Strings and Numbers that are stored in variables
// When you join a string and a number using +, the number becomes part of the text.
const girlName = "Indiana";
const age1 = 34;
// Indiana is 34 years old
const intro = girlName + " is " + age1 + " years old."
console.log(intro);

// Using concat()
const newIntro = girlName.concat(" is ", age1, " months old.");
console.log(newIntro);
// Unlike concatenation that uses (+) - addition sign - to link fixed text and variables, concat() uses comma to do the linking.

// Template Literals (${})
// Template Literals
// Template literals let you write strings that include variables and calculations easily.
// They use backticks (`), instead of single or double quotation marks.
// Place a variable inside ${} to insert its value.
// 1. Creating a Template Literal
// EXAMPLE 1:
// Amaka disappointed Psqaure many years ago.
const gName = "Amaka";
const artiste = "P-square";
console.log(`${gName} disappointed ${artiste} many years ago.`);
// We don't need to put fixed text in quotation marks. No need for addition sigh or comma to link values. You write it normally but with variables embedded in the curly braces preceded by a dollaer sign ($).

// EXAMPLE 2:
const mike = "Father figure";
const johnBull = "Emmanuel";
const rev = "Oreoluwa";
const mrBean = "Imran";

const result2 = `${mike} likes ${johnBull}, loves ${rev}, and bullies ${mrBean}.`
console.log(result2);

// EXAMPLE 3. Including Calculations
// You can put a calculation inside ${}:
const digitOne = 30;
const digitTwo = 4;
// You need not to be taught that 30 multiplied by 4 equals 120.
console.log( `You need not to be taught that ${digitOne} multiplied by ${digitTwo} equals ${digitOne * digitTwo}.`);


// NUMBER
// 13TH OCTOBER 2026
// NUMBER DATA TYPES
// What is the Number Data Type?
// The Number data type is used to store numeric values in JavaScript.
// These values can be used for:

//  Counting

//  Measuring

// Calculations

// Prices

// Ages

// Scores


// HOW TO DECLARE A NUMBER DATA TYPE:
const number = 20;
console.log(number);

// Types of numbers
// 1. whole number (integers)
const numberTwo = 89;
console.log(numberTwo);

// 2. Decimal Numbers (Floating points)
let numberThree = 15.5;
console.log(numberThree);

 // 3. negative numbers
 const numberFour = -36;
 console.log(numberFour);


 // MATHEMATICAL OPERATORS
// 1. SUBTRACTION/MINUS (-)
// 2. ADDITION/PLUS (+)
// 3. DIVISION (/)
// 4. MULTIPLICATION/TIMES (*)
// 5. MODULUS/REMAINDER (%)
// 6. EXPONENTIAL/RAISE TO POWER (**)
// 7. INCREMENT (++)
// 8. DECREMENT (--)


// 1. SUBTRACTION/MINUS (-)
// EXAMPLE:
const subtraction = numberTwo - number;
console.log(subtraction);

// 2. ADDITION/PLUS (+)
// EXAMPLE:
const add = number + numberTwo;
console.log(add);

// 3. DIVISION (/)
// EXAMPLE:
const division = numberTwo / number;
console.log(division);

// 5. MODULUS/REMAINDER (%)
// EXAMPLE:
const rem = numberTwo % number;
console.log(rem);

 // 6. EXPONENTIAL/RAISE TO POWER (**)
//  EXAMPLE:
const expo = number ** 2;
console.log(expo);

// 7. INCREMENT (++) (same as + 1)
// EXAMPLE:
let numberFive = 49;
numberFive++;
console.log(numberFive);

// increase by more than 1 - "+=number"
let numberSix = 34;
numberSix +=2;
console.log(numberSix);

let numberSeven = 51;
numberSeven +=5;
console.log(numberSeven);


// 8. DECREMENT (--) (same as - 1)
let numberEight = 60;
numberEight--;
console.log(numberEight);


// decrease by more than 1 - "-=number"
let numberNine = 74;
numberNine-=8;
console.log(numberNine);


// ===== OPERATOR PRECEDENCE====
// 1. parenthesis: anything in a () will be done first
// 2. exponence: will come next **
// 3. multiplication
// 4 division 
// 5 modulo
// 6. addition 
// 7. subtraction

// EXAMPLE:
let rest = 2 + 3 * (4 / 2);
console.log(rest);



//====== JavaScript Math Methods =====
// What is the Math Object?
// JavaScript provides a built-in object called Math that contains properties and methods for performing mathematical operations.

// You do not create it — it already exists.
// You use it like this:

// Syntax
// Math.methodName()

// TYPES:
// 1. Math.round()
// Rounds a number to the nearest whole number.
const numm = 23.45;
console.log(Math.round(numm));


// 2. Math.floor()
// Always rounds down to the nearest whole number.
const nummTwo = 2.765;
console.log(Math.floor(nummTwo));


 // 3. Math.ceil()
// Always rounds up to the nearest whole number.
const nummThree = 4.384;
console.log(Math.ceil(nummThree));

// 4. Math.trunc()
// Removes the decimal part (no rounding).
const nummFour = 13.657;
console.log(Math.trunc(nummFour));

// 5. Math.random()
// Generates a random number between:
// 0  (inclusive)
// 1  (exclusive)
const nummFive = Math.random();
console.log(nummFive);

// 6. Math.max()
// selects greater/greatest number
// EXAMPLE:
const nummSix = 40;
const nummSeven = 31;
const nummEight = 120;
console.log(Math.max(nummSix, nummSeven, nummEight));

// 7. Math.min()
// selects lesser/least number
// EXAMPLE:
console.log(Math.min(nummSix, nummSeven, nummEight));

// 8. Math.pow()
// Raises a number to a power.
// EXAMPLE:
const nummNine = 10
console.log(Math.pow(nummNine, 3));

// 9.  Math.sqrt()
// Finds square root.
// EXAMPLE:
const nummTen = 64;
console.log(Math.sqrt(nummTen));

// Make a Number Positive — Math.abs()
const nummm = -71;
console.log(Math.abs(nummm));



// TYPE COERCION AND TYPE CONVERSION
// ----------------------------------------------------
// TYPE COERCION:
// Type coercion happens when JavaScript automatically converts a value from one data type to another during an operation.
const valOne = "5";
const valTwo = 2;
console.log(valOne + valTwo);
// Here, JavaScript converts 2 into a string and joins the two values.


// A. When one operand is a string, + joins the values as strings.
// Order matters because these operations happen from left to right:
const valThree = "4";
const valFour = 6;
const valFive = 3;
console.log(valFive * (valThree + valFour));
console.log((valThree + valFour) / valFive);
console.log(valThree * (valFour + valFive));

// Operators such as -, *, and / convert numeric strings into numbers.
const valSix = 2;
console.log(valThree - valSix);


// B. If the string cannot be converted into a valid number, the result of its multiplication is NaN, meaning Not a Number:
const wordd = "Hi" ;
console.log(wordd * valSix);

//  Booleans in arithmetic
// C. During numeric conversion, true becomes 1 and false becomes 0.
console.log(true + 3);




// Explicit type conversion
// When you deliberately convert a value, it is called explicit conversion.
const nm = 436; //number
const nmTwo = "322" //string

// To perform addition, convert `nmTwo` into a number() function using Number():
console.log(nm + nmTwo);
// i. Number() — converts a value into a number.
console.log(Number(nmTwo) + nm);

// ii. String() — converts a value into a string.
console.log(String(nm) + nmTwo);

// iii. Boolean() — converts a value into true or false.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));


// ======JavaScript Number Methods======

// JavaScript Number methods are built-in functions used to work
// with numeric values, such as formatting numbers or converting
// them into strings.
// We have instance and static methods

// INSTANCE METHODS:
// Examples:
// Note: These four methods below return strings.
// They do not change the original number.
// 1. toFixed() — formats a number with a specified number of decimal places. toFixed(2) is perfect for working with money. This targets decimal values.
// EXAMPLE:
const fix = 156.7895;
console.log(fix.toFixed(2));
console.log(fix.toFixed(3));

// 2. toPrecision() — formats a number with a specified number of significant digits. This targets all number values.
// EXAMPLE:
const pre =  156.7895;
console.log(pre.toPrecision(4));

// 3. toString() — converts a number into a string.
// EXAMPLE:
const str = 284;
console.log(str.toString());
console.log(str.toString() + pre); // str is converted to string here.
console.log(str + pre); //str not converted to string 

// 4. toExponential() — expresses a number in exponential notation. toExponential() writes a number in exponential notation and returns a string. 
// EXAMPLE: 
const nuum = 6500;
console.log(nuum.toExponential());
console.log(nuum.toExponential(5));

// 5. Number method - Number() function already discussed above.

// valueOf() Method
// valueOf() returns a number as a number.
console.log(nuum.valueOf());


// 1. INTRODUCTION TO LOOPS:
// A loop in JavaScript is used to execute a block of code repeatedly, as long as a specified condition is met.
// In simple terms, loops help us perform repetitive tasks without writing the same code multiple times.
// Example: Without a loop
// Suppose we want to display "Welcome to JavaScript!" five times.

// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");


// This works, but we are repeating the same statement unnecessarily. This can be easier done with a loop.

// 2. Types of Loops in JavaScript
// JavaScript provides several ways to repeat code.


// Loop       | 	Purpose
// for	      | 	 Repeats code, usually when we know how many times it should run.
// while	  | 	 Repeats code while a condition remains true.
// do...while | 	 Executes code at least once before checking the condition.
// for...of	  | 	 Loops through values in an iterable, such as an array or string.
// for...in	  | 	 Loops through enumerable property names (keys) of an object.


// We will begin with the three basic loops: for, while, and do...while.

// 3. The for Loop
// The for loop is commonly used when we know how many times we want to repeat a task.

// Syntax
// for (initialization; condition; update) {
//     // Code to execute
// }


// A for loop contains three important parts:
// 1. Initialization: Creates a variable that controls the loop.
// 2. Condition: Determines whether the loop should continue.
// 3. Update: Changes the variable after each iteration.

// EXAMPLE:
// Display numbers from 1 to 5.
for(let i = 1; i <= 5; i++) {
    console.log(i);
    
}
// Understanding the code
// - let i = 1 means the loop starts counting from 1.
// - i <= 5 means the loop continues while i is less than or equal to 5.
// - i++ means increase i by 1 after each iteration.
// - console.log(i) displays the current value.
// Important: An iteration is one complete execution of the loop's body.

// Countdown
// 1. Display numbers from 5 to 1.
for (let i = 5; i >= 1; i--) {
    console.log(i);
    
}

// 2. Display numbers from 5 to 2.
// for (let i = 5; i >= 2; i-=2) {
//     console.log(i);
    
// }

// 3. Write a for loop that displays odd
//    numbers from 1 to 15.
for (let i = 1; i <= 15; i+=2) {
    console.log(i);
    
}



// 4. Write a for loop that displays even
//    numbers from 0 to 16.
for (let i = 0; i <= 16; i+=2 ) {
    console.log(i);
    
}

// 5. Total 
// Calculate the sum of numbers from 1 to 5.
let total = 0;

for(let i = 1; i <= 5; i++) {
    total = total + i
    console.log(total);
    
}

// SUMMARY
// Explanation:
// - First iteration: 0 + 1 = 1
// - Second iteration: 1 + 2 = 3
// - Third iteration: 3 + 3 = 6
// - Fourth iteration: 6 + 4 = 10
// - Fifth iteration: 10 + 5 = 15
// The variable total keeps the accumulated sum.


// 6.
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");


// Example: With a loop
// trying with a for loop
for (let i = 1; i <= 5; i++) {
    console.log("Welcome to JavaScript!");
    
}


// =============== BREAK AND CONTINUE IN A FOR LOOP
// Using break and continue in a for Loop
// We already know that a for loop executes a block of code repeatedly as long as its condition is true.

// Normally, the loop continues until its condition becomes false.
// However, JavaScript provides two important statements that allow us to change how a loop executes:
// - break — Stops the loop completely.
// - continue — Skips the current iteration and proceeds to the next one.

// 2. The break Statement
// What is break?
// The break statement immediately stops a loop.
// The break statement is used to immediately terminate a loop, even if the loop's condition is still true.
// It is applied using if statement.

// Example 1: Stop the loop when the number reaches 5 for a loop that counts from 1 to 10. 
// for ( let i = 1; i <= 10; i++) {
//     console.log(i);

//     if (i === 5) {
//         break;
//     }

//     // console.log(i);
    
// }

// 3. The continue Statement
// What is continue?
// The continue statement skips the remaining code in the current iteration and moves to the next iteration.
// The continue statement is used to skip the remaining statements in the current iteration without stopping the entire loop.
// In simple terms, continue tells JavaScript:
// Skip the rest of this iteration and proceed to the next one.
// Also applied using if statement

// EXAMPLE:
// Example 1: Skip the loop when the number reaches 8 for a loop that counts from 4 to 13. 
// for (let i = 4; i <= 13; i++) {

//     if (i === 8) {
//         continue;
//     }
    
//     console.log(i);
// }

for (let i = 4; i <= 13; i++) {

    if (i === 8) {
        continue;
    }

    if (i === 11) {
        break;
    }
    
    console.log(i);
}