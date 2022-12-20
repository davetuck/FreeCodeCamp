/* 
7 different Data Types:
- undefined: something that hasn't been defined, a variable you haven't set to be anything.
- null: nothing.  When you set it to be something, and that thing is nothing.
- boolean: true/false.
- string: collection of characters.
- symbol: an immutable, primitive value that is unique.
- number: number.
- object: can store a lot of different key value pairs.
*/// 

// Often, we set Data in to a Variable.  Variables allow computers to store and manipulate data
  // in a dynamic fashion.  It's basically a label to point to the data.  
  // 3 ways to declare a variable: var, let, and const.

var myName = 'David';  // var can be used throughout your whole program.
console.log(myName);

myName = 8;

let campName = "freeCodeCamp"  // let can only be used within the scope where you declare it.
console.log(ourName);

const pi = 3.14      // a variable that can never change. if you try to change it, you'll get an error

// There's a differene between declaring a variable and assigning a variable. 
  // to declare a variable:
    var a;  // we're just declaring this variable to be called "a".
  // to declare and assign a variable in one line:
    var b = 2;  // the equals sign is the assignment operator.
  // to assign only, once "a" is declared:
    a = 7
  // you can also assign variables to each other:
    b = a;
    console.log(a, b);   // console.log allows you to see things in the console.

// Initializing Variables with Assignment Operator: initializing variables to an initial value
  // at the same time it's declared:
  var a = 9;    // "var a" is declaring it, and 9 is being assigned by the equals sign.
// Uninitialized Variables: 
  // Initialize these three variables:
  var a = 5;
  var b = 10;
  var c = "I am a";

  a = a + 1;
  b = b + 5;
  c = c + " String!"

  console.log(a, b, c)

// Variable Case Sensitivity
  // Declarations & Assignments
  var studlyCapVar = 10
  var properCamelCase = "A string";
  var titleCaseOver = 9000;
console.log(studlyCapVar, properCamelCase, titleCaseOver);

// NUMBERS
  // Console Math
  var sum = 10 + 10;
  console.log(sum);
  var difference = 45 - 33;
  console.log(difference);
  var product = 8 * 10;
  console.log(product);
  var quotient = 66 / 33;
  console.log(quotient);

// Incrementing Numbers:
var myVar = 90;
myVar = myVar + 1;
console.log(myVar);
  // quicker way of doing this 👆🏼
  myVar++
  console.log(myVar);

// Decrementing Numbers: 
var myVar = 11;
myVar--;
console.log(myVar);

// Decimal Numbers: (sometimes referred to as floating point numbers).
var ourDecimal = 5.7;
var myDecimal = 0.0009

// Multiplying Decimals:
var product = 2.5 * 2.5
console.log(product);

// Finding a remainder:
var remainder = 11 % 3;  // 3 goes in to 11 3 times with a remainder of 2, so output = 2.
console.log(remainder);

// Compound Assignment with Augmented ADDITION:
var a = 3; 
var b = 17; 
var c = 12;
  // 👇🏼 instead of writing like this, you can use the += operator. 
a = a + 12;  // a += 12;
b = 9 + b;   // b += 9;
c = c + 7;   // c += 7;

// Compound Assignment with Augmented SUBTRACTION:
var a = 11;
var b = 9; 
var c = 3;
  // 👇🏼 instead of writing like this, you can use the -= operator.
a = a - 6;   // a -= 6;
b = b - 15;  // b -= 15;
c = c - 1;   // c -= 1;

// Compound Assignment with Augmeted MULTIPLICATION:
var a = 5; 
var b = 12;
var c = 4.6;
  // 👇🏼 instead of writing like this, you can use the *= operator.
a = a * 5; // a *= 5;
b = b * 3;  // b *= 3;
c = c * 10;  // c *= 10;

// Compound Assignment with Augmeted DIVISION:
var a = 48; 
var b = 108;
var c = 33;
  // 👇🏼 instead of writing like this, you can use the *= operator.
a = a / 12; // a /= 5;
b = b / 4;  // b /= 3;
c = c / 11;  // c /= 10;


// DECLARE STRING VARIABLES: anything with '', "", or `` is a string.
  // Example
  var firstName = "Alan";   // these are called string literals
  var lastName = "Turing";  // these are called string literals

  var myFirstName = "Dave";
  var myLastName = "Tucker";

// Escaping Literal Quotes in Strings, aka adding quotes within quotes.
  // Method 1: you can put back slashes \ in front of each of the quote marks:
  var myStr = "I am a \"double quote\" string that's inside \"double quotes\"";
  console.log(myStr);
  // Method 2: you can use single quotes '' at the start/end, then use double quotes "" inside.
  var myStr = '<a href="http://www.example.com" targed="_blank">Link</a>'
  // Method 3: you can use back-ticks `` at the start and end of your string, then use
    // single quotes '' AND double quotes "" inside.
  var myStr = `I am a "double quote" string that's inside "double quotes"`;
  console.log(myStr);

/**** 
  CODE:  OUTPUT:
  \'     single quote
  \"     double quote
  \\     backslash
  \n     newline
  \r     carriage return
  \t     tab
  \b     backspace
  \f     form feed
****/

var myStr = "\\FirstLine\n\t\\SecondLine\n\t\t\\ThirdLine"
console.log(myStr);

// Concatenating Strings (combining strings together)
  // Plus Operator:
    // Example 1
    var ourStr = "I come first. " + "I come second.";
    console.log(ourStr);
    // Example 2
    var myStr = "This is the start. " + "This is the end.";
    console.log(myStr);
  // Plus Equals Operator:
    // Example 1:
    var ourStr = "I come first. ";
    ourStr += "I come second.";
    console.log(ourStr);
    // Example 2:
    var myStr = "This is the first sentence. ";
    myStr += "This is the second sentence.";
    console.log(myStr);

// Combining Strings Together With Variables in a Concatenation
  // Example 1:
  var ourName = "FreeCodeCamp";
  var ourStr = "Hello, our name is " + ourName + ".  How are you?";
  console.log(ourStr);
  // Example 2: 
  var myName = "Dave";
  var myString = "Hi!  My name is " + myName + " and I am well, thank you!";
  console.log(myString);

// Appending Variables to Strings using +=
  // Example 1: 
  var anAdjective = "awesome.";
  var ourStr = "FreeCodeCamp is ";
  ourStr += anAdjective;
  console.log(ourStr);
  // Example 2:
  var someAdjective = "worthwhile!";
  var myStr = "Learning to code is ";
  myStr += someAdjective;
  console.log(myStr);

// Finding the length of a string
  // Example 1:
  var firstNameLength = 0;
  var firstName = "Davit";
  firstNameLength = firstName.length;  // .length returns an integer that counts the string length
  console.log(firstNameLength);
  // Example 2:
  var lastNameLength = 0;
  var lastName = "Goggins";
  var lastNameLength = lastName.length;
  console.log(lastNameLength);
  // you can write this 👆🏼 like this 👇🏼:
  var lastNameLength = lastName.length;
  var lastName = "Goggins"
  console.log(lastNameLength);

// Bracket Notation to Find First Character in String
  // Example 1: 
  var firstLetterOfFirstName = "";
  var firstName = "Gangnam";
  firstLetterOfFirstName = firstName[0]; // JS starts counting at zero, which is called "Zero Phase Indexing".
  console.log(firstLetterOfFirstName);
  // Example 2:
  var firstLetterOfLastName = "";
  var lastName = "Style";
  firstLetterOfLastName = lastName[0];
  console.log(firstLetterOfLastName);
    // here's a shorter way of writing these lines 226-227 and 231-232): 
    console.log(firstName[0]);
    console.log(lastName[0]);

// String Immutability (strings are immutable, meaning they cannot be altered once created).
    // this doesn't mean they can't be changed, but the individual characters of a String Literal can not be changed.
var myStr = "Jello World";  // Fix Me
myStr = "Hello World"; 
console.log(myStr);

// Bracket Notation to find Nth Character in a String
  // Example: 
  var firstName = "Ada";
  var secondLetterOfFirstName = firstName[1];
  console.log(secondLetterOfFirstName);

// Bracket Notation to find Last Character in String 
  // Example: 
  var firstName = "Ezekiel"
  var lastLetterOfFirstName = firstName[firstName.length -1];
  console.log(lastLetterOfFirstName);
  var lastName = "Monmouth"
  var lastLetterOfLastName = lastName[lastName.length - 1];
  console.log(lastLetterOfLastName)

// Bracket Notation to Find Nth-to-Last Character in String
  // Third-to-last letter:
  var firstName = "Mozambique"
  var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
  console.log(thirdToLastLetterOfFirstName);
  // Second-to-last letter:
  var secondToLastLetterOfFirstName = firstName[firstName.length - 2];
  console.log(secondToLastLetterOfFirstName);  

// Word Blanks - Making a Mad Lib game:
  function madLib(myNoun, myAdjective, myVerb, myAdverb) {
    var wordBlanks = "";
    wordBlanks += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return wordBlanks;
  }
  console.log(madLib("idiot", "stupid", "slid", "moronically"));
  console.log(madLib("fucktard", "close-minded", "moonwalked", "like MJ"));

// Store Multiple Values With Arrays (Arrays allow you to store several peices of data in one place).
  // start and end with a bracket.  Every element in an array is separated by a comma.  You can have 
  // any data type for the element in an array.
  // Example: 
  var ourArray = ["John", 23];
  var myArray = ["Quincy", 1];

// Nested Arrays (when one of the elements in an array is an array, it's a nested array or a multi-dimensional array).
  // Example 1
  var ourArray = [["the universe", 42], ["everything", 101010]];
  // Example 2
  var myArray = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
  // Example 1:  (👇🏼  👇🏼   👇🏼 These are indexes)
  var ourArray = [50, 60, 70];
  var ourData = ourArray[0]; 
  console.log(ourData);
  // Example 2:
  var myArray = [50, 60, 70];
  console.log(myArray[1]);

// Modify Array Data with Indexes 
  // Example 1
  var ourArray = [18, 64, 99];
  console.log(ourArray);
  ourArray[1] = 45;
  console.log(ourArray);
  // Example 2 
  var ourArray = [18, 64, 99];
  ourArray[0] = 45;
  console.log(ourArray);

// Access Multi-Dimensional Arrays with Indexes
  // Example 1
  var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
    // accessing different arrays within an array:
  var myData = myArray[2][1];  // = 8
  console.log(myData);
  var myData = myArray[3][2];  // = 14
  console.log(myData);
  var myData = myArray [3][0][1]  // = 11
  console.log(myData);

// Manipulate Arrays with push(): appending data to the end of an array.
  // Example:
  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.push(["happy", "joy"]);
  console.log(ourArray);