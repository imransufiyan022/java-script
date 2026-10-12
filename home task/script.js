const bookTitle = "The Hidden Kingdom";
const author = "James Williams";

let availableCopies = 10;
availableCopies = 6;

console.log(bookTitle);
console.log(author);
console.log(availableCopies);



const book = {
    title: "The Hidden Kingdom",
    price: 4500,
    isAvailable: true
};

console.log(book.title);
console.log(typeof book.title);

console.log(book.price);
console.log(typeof book.price);

console.log(book.isAvailable);
console.log(typeof book.isAvailable);

let genres = ["Adventure", "Fantasy", "Mystery"];

console.log(genres[2]);

genres[0] = "Action";

console.log(genres);

console.log(bookTitle.length);

console.log(bookTitle.toUpperCase());

console.log(bookTitle.toLowerCase());

console.log(bookTitle.slice(0, 3));

console.log(bookTitle.indexOf("K"));


let authorName = "   James Williams   ";

console.log(authorName.trim());


let borrowerName = null;

let returnDate;

console.log(borrowerName);
console.log(returnDate);

// null means the variable has been given an empty value.
// undefined means the variable has been declared but has no value.


// Class Task: Practise String Methods
// Use console.log() to display each result.
// 1. Create a string containing "Welcome to our coding club".
//    - Check whether it includes "coding".
//    - Check whether it starts with "Welcome" and ends with "club".
//    - Use substring() to extract "coding".
// 2. Create a string containing "Books are useful. Books are exciting.".
//    - Use replace() to replace the first "Books" with "Stories".
//    - Use replaceAll() to replace both occurrences.
// 3. Create a string containing "red,blue,green". Use split() to turn it into an array of colours.
// 4. Create a string containing "42".
//    - Use padStart() to produce "0042".
//    - Use padEnd() to produce "42**".
// 5. Use concat() to join "Happy" and "Learning" with a space. Display the first character of the result using charAt(), then repeat the complete result twice using repeat().

// 1
const greetings = "welcome to our coding club";
console.log(greetings.includes("coding"));
console.log(greetings.startsWith("welcome"));
console.log(greetings.substring(15, 21));
// 2
const books = "books are useful. books are exciting";
console.log(books.replace("books", "stories"));
console.log(books.replaceAll("books", "stories"));

// 3
const colours = "red,blue,green";
console.log(colours.split(","));
// 4
const numbe = "42"
console.log(numbe.padStart(4, "00"));
console.log(numbe.padEnd(4, "*"));
// 5
const oneword = "happy";
const twoword = "learning";
const result = oneword.concat(" ", twoword)
console.log(result);
console.log(result.charAt(0));
console.log(result.repeat(2));




// Practice Task: String Concatenation
// 1. Create two variables containing "Good" and "morning". Join them with a space using + and display the result.
// 2. Create a variable named visitorName containing "Chidi". Join the word "Welcome" with this variable to display:
//    Welcome Chidi
// 3. Use these variables:
//    const customerName = "Zainab";
//    const ticketCount = 3;
//    const eventName = "Music Night";
//    - Use + to create Zainab booked 3 tickets for Music Night. Store it in bookingMessage.
//    - Create the same message using .concat(). Store it in secondMessage.
//    - Display both using console.log().
// Remember: Include spaces and punctuation when joining strings.



const alpha = "good"
const letter = "morning"
const together = alpha + " " + letter;
console.log(together);

const visitorName = "chidi"
const like = "welcome" + " "+ visitorName + ".";
console.log(like);

const customerName = "Zainab";
const ticketCount = 3;
const eventName = "Music Night";
const bookingMessage = customerName + " booked " + ticketCount + " tickets " + " for " + eventName + ".";
console.log(bookingMessage);
const secondMessage = customerName.concat(" booked ", ticketCount, " tickets ", "for ", eventName, ".")
console.log(secondMessage);


// Practice Tasks
// 1. Create variables for your name, age, and course.
// 2. Use a template literal to introduce yourself.
// 3. Create productName, price, and quantity.
// 4. Display a sentence containing the product name and total cost.
// 5. Write a three-line welcome message using one template literal.
// Display all results using console.log().


const name = "imran";
const age = "18";
const course = "fullstack";
const introduction = `I am ${name} and i am ${age} i study ${course}.`;
console.log(introduction);

const productName = "nestle";
const price = 30;
const quantity = 20;
const milo = `${productName} is $${price} and i bought ${quantity} for $${price * quantity}`
console.log(milo);

const welcome = `hello i am ${name} i am ${age} years old i study ${course} at techstudio, the price to enroll is ${price} blah blah blah blah blah blah blah blah blah blah blah `