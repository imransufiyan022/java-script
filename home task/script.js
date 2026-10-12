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