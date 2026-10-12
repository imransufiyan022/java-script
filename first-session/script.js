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