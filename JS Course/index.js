/* 
https://www.youtube.com/watch?v=PkZNo7MFNFg&t=35s
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

// Manipulate Arrays with push(): adding an element to the END of an array.
  // Example 1:
  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.push(["happy", "joy"]);
  console.log(ourArray);
  // Example 2:
  var myArray = [["John", 23], ["cat", 2]]
  myArray.push(["dog", 3])
  console.log(myArray);

// Manipulate Arrays with pop(): removing the FINAL element from an array.
  // Example 1:
  var ourArray = [1, 2, 3];
  var removedFromOurArray = ourArray.pop();
  console.log(ourArray);
  // Example 2: 
  var myArray = [["John", 23], ["cat", 2, 4]];
  var removedFromMyArray = myArray.pop();
  console.log(myArray);

// Manipulate Arrays with shift(); removing the FIRST element from an array.
  // Example 1: 
  var ourArray = ["Stimpson", "J", ["cat"]];
  var removedFromOurArray = ourArray.shift();
  console.log(ourArray);
  // Example 2:
  var myArray = [["John, 23"], ["dog", 3]];
  var removedFromMyArray = myArray.shift();
  console.log(myArray);

// Manipulate Arrays with unshift(); adding an element to the START of an array.
  // Example 1:
  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.shift();   // ourArray now equals ["J", "cat"];
  ourArray.unshift("Happy");
  console.log(ourArray);
  // Example 2:
  var myArray = [["John", 23], ["dog", 3]];
  myArray.shift();
  myArray.unshift(["Dave", 32]);
  console.log(myArray);

// Shopping List (Nested Arrays);
  // Example
  var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// Write Reusable Code with Functions
  // Example 1
  //        👇🏼 Function Name 
  function ourReusableFunction() {
    console.log("Heyya, World")
  }
  ourReusableFunction();  // anything inside the curly bracket is run when the function is called, like on this line.
  ourReusableFunction();
  ourReusableFunction();
  // Example 2
  function reusableFunction() {
    console.log("Hi World!");
  }
  reusableFunction();
  reusableFunction();

// Passing Values to Functions with Arguments;
  // Example 1:
            // Parameters are 👇🏼  👇🏼  Variables that act as placeholders for the values that are to be input to a function when it is called.
  function ourFunctionWithArgs(a, b) {  // 👈🏼 declaring the variables
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5);  // Outputs 5
            // These  👆🏼  👆🏼 are the Arguments which assign the Variables a value.
  // Example 2
  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(5, 4);  // Outputs 9

// Global Scope and Functions; "Scope" refers to the visibility of variables.  
  // Variables which are defined outside of the function block have "Global Scope".
  // Global Scope means they can be seen everywhere in your JavaScript code.
  // Example 1
    // Declare your variable here
    var myGlobal = 10;  // this variable is global

    function fun1() {
      oopsGlobal = 5;  // you don't use the "var" keyword before oopsGlobal, this becomes global automatically.
    }

    function fun2() {
      var output = ""; // this is defining the variable "output".
      if (typeof myGlobal != "undefined") {  // this asks if myGlobal is not equal to "undefined".  Since myGlobal is defined globally, it will run within this 'if statement'."
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {  // since oopsGlobal isn't defined globally, this function returns undefined.
        output += " oopsGlobal " + oopsGlobal;
      }
      console.log(output);
    }
    fun1();
    fun2();

// Local Scope and Functions
  // Variabled declared within a function, as well as the function Parameters, have local scope. 
  // This means that they are only visible from within the function.
  // Example
  function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
  }
  myLocalScope();

// Global vs. Local Scope in Functions
  // It is possible to have both local and global variables with the same name.
  // Local variables take precedent over global variables.
  // Example 1
  var outerWear = "T-Shirt";  // variable defined globally
  function myOutfit1() {
    var outerWear = "Jacket";  // variable defined locally
    console.log(outerWear);   
  }
  myOutfit1();                // returns "Jacket"
  // Example 2 
  var outerWear = "T-Shirt";   // variable defined globally
  function myOutfit2() {
    var outerWear = "Sweater";  // variable defined locally
    return outerWear;
  }
  console.log(myOutfit2());    // function returns the locally defined variable "Sweater".
  console.log(outerWear);     // log returns "T-Shirt" since this is defined globally

// Return a Value from a Function with Return
  // Example 1
  function minusSeven(num) {
    return num - 7;           
  }
  console.log(minusSeven(10));  // this is how you call a function with a return
  // Example 2
  function timesFive (num) {
    return num * 5;
  }
  console.log(timesFive(10));  // call the function here

// Understanding "Undefined" Value Returned from a Function 
  // Example 1
  var sum = 0;           // variable is defined before the function, so it doesn't return anything.
  function addThree() {  // this function's value is "Undefined" since the return value isn't specified.
    sum = sum + 3;      
  }
  // Example 2
  function addFive() {   
    sum += 5;           // this is the same as writing "sum = sum + 5"
  }

// Assignment with a Returned Value
  // Example 1:
  var changed = 0;  // declaring the variable here, assigning it to zero.
  function change(num) {
    return (num + 5) / 3;
  }
  changed = change(10);  // modifying the variable with the function
  console.log(changed);  // results in 5 ((10 + 5) / 3);
  // Example 2:
  var processed = "";  // declaring the variable, assigning it to nothing.
  function processArg(num) {
    return (num + 3) / 5;
  }
  processed = processArg(10);
  console.log(processed);  // results in 2.6 ((10 + 3) / 5);

// Stand In Line
  // In CS, a QUEUE is an abstract data structure where items are kept in order.
   // New items can be added to the back of the queue, and old items are taken from the fron of the queue.
  // Example
  function nextInLine(arr, item) {
    arr.push(item);       // here we add the element (item) to the end of the array;
    return arr.shift();   // here we remove the first element from the array (1);
  }
  var testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + JSON.stringify(testArr));  // "JSON.stringify" is just a way to turn an Array into a string.
  console.log(nextInLine(testArr, 6));                // this calls the function, which removes the 1 and adds the 6.
  console.log("After: " + JSON.stringify(testArr));   // we're logging the result now that the 1 has been removed and the 6 added, both donen by the function.


// Boolean Values: another data type with two values, true or false.
  // basically on/off switches where true is on, and false is off.
  function welcomeToBooleas() {
    return true;
  }

// Use Conditional Logic with If Statments
  // If statements are used to make decisions in code.  
  // Example 1:
  function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {         // if the variable in the parenthesis is true, the code within the curly brackets will run.
      return "Yes, it's true"
    }
    return "No, it's false" // if the variable in the parenthesis is not true, this return statement runs.
  }
  console.log(ourTrueOrFalse(false));
  // Example 2:
  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true."
    }
    return "No, that was not true."
  }
  console.log(trueOrFalse(true));

// Comparison with the Equality Operator
  // There are many comparison operators in JS.  Common one is the equality operator, which is the double = "==" sign.
  // Example 1:
  function testEqual(val) {
    if (val == 12) {   // have to use a double equals sign, because single would mean that the val variable equals 12.
      return "Equal to one.";
    }
    return "Not equal to one.";
  }
  console.log(testEqual(10));

// Comparison with the STRICT Equality Operator 
  // Strict is the triple equals "===" sign.
  // == attempts to convert both values being compared to a common type
  // === this does not do the type-conversion
      // 3 == 3; true
      // 3 == '3'; true
      // 3 === 3; true
      // 3 === '3'; false
  // Example 1:
  function testStrict1(val) {
    if (val === 10) {
      return "True";
    }
    return "False";
  }
  console.log(testStrict1('10'));  // this returns "False"
  // Example 2:
  function testStrict2(val) {
    if (val === '10') {
      return "True";
    }
    return "False";
  }
  console.log(testStrict2('10'));  // this returns "True"

// Practice Comparing Different Values 
  function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    }
    return "Not Equal";
  }
  console.log(compareEquality(10, "10"));

// Comparison with the Inequality Operator
  function testNotEqual(val) {
    if (val != 99) {
      return "True, it's Not Equal";
    }
    return "False, it's Equal";
  }
  console.log(testNotEqual('99'));  // Showing that again, double characters "!=" change the type to be similar, so this yields "Equal".

// Comparisoin with the Strict Inequality Operator
  function testStrictNotEqual(val) {
    if (val !== 99) {
      return "True, it's not equal";
    }
    return "False, it's equal";
  }
  console.log(testStrictNotEqual('99'));

// Comparison with the Logical and Operator
  // Example: 
  function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    }
    if (val == 100) {
      return "Equal to 100";
    }
      return "Under 100";
  }
  console.log(testGreaterThan(100));

// Comparison with the Greater Than or Equal To Operator
  // Example:
  function greaterThanOrEqualTo(val) {
    if (val >= 20) {                // notice the values go down when it's greater than or equal to
      return "20 or over";
    }
    if (val >= 10) {
      return "10 or over"
    }
    return "Less than 10";
  }
  console.log(greaterThanOrEqualTo(9))

// Comparison with the Less Than Operator
  // Example
  function lessThan(val) {
    if (val < 10) {             //notice the (val) equations have to go up when less than or equal to
      return "Less Than 10";
    }
    if (val < 20) {
      return "Less Than 20";
    }
    return "20 or over"
  }
  console.log(lessThan(19));

// Comparison with the Less Than Or Equal To Operator
  // Example
  function lessThanOrEqualTo(val) {
    if (val <= 10) {                //notice the (val) equations have to go up when less than or equal to
      return "10 or less";
    }
    if (val <= 20) {
      return "20 or less";
    }
    return "Over 20";
  }
  console.log(lessThanOrEqualTo(9))

// Comparison with the Logical And Operator: checking if two things are true at the same damn time.
  // then logically you need two If Statements.  However you can write that shorter.
  // Example 1 (this is writing it the long way *bad practice*):
  function testLogicalAnd(val) {
    if (val <= 50) {
      if (val >= 25) {          // this is a "Nested If Statemet". *Bad Practice*
        return "Within 25-50";
      }
      return "Either larger than 50 or smaller than 25";
    }
  }
  console.log(testLogicalAnd(26))
  // Example 2 (this is the shorter way of writing the same as Ex: 1):
  function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {  //with &&, both sides have to be true to return a true statement.
      return "Within 25-50";
    }
    return "Either larger than 50 or smaller than 25";
  }
  console.log(testLogicalAnd(120))

// Comparisons with the Logical Or Operator: testing if ONE OF TWO sides is true
  // Example 1 (*Bad Practice*)
  function testLogicalOr(val) {
    if (val < 10) {
      return "Outside";
    }
    if (val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  // Example 2: 
  function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  console.log(testLogicalOr(11))

// If-Else Statements: an alternate block of code which can be executed if an IF statemet is not true.
  // Example 1: 
  function testElse(val) {
    if (val > 5) {
      return "Greater Than 5";
    } 
    else {
      return "5 or smaller"
    }
  }
  console.log(testElse(4));

// If-ElseIf-Else Statements
  // Example
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Greater than 5";
    }
    else {
      return "Between 5 and 10";
    }
  }
  console.log(testElseIf(6));

// Logical Order in If Else Statements: (If the (val)s are in the wrong order, they won't return the desired result.  Once the first condition is met, it doesn't check the rest of the conditions.)
  // Example:
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less Than 5";
    }
    else if (val < 10) {
      return "Less Than 10";
    }
    else {
      return "Greater than or equal to 10";
    }
  }
  console.log(orderMyLogic(9));

// Chaining If-Else Statements
  // Example: 
  function testSize(num) {
    if (num <= 5) {
      return "Tiny";
    }
    else if (num <= 10) {
      return "Small";
    }
    else if (num <= 15) {
      return "Medium";
    }
    else if (num <= 20) {
      return "Large";
    }
    else {
      return "Huge";
    }
  }
  console.log(testSize(21))

// Golf Code
  let nicknames = ["Hole-in-one!!!!", "Albatross!!!", "Eagle!!", "Birdie!", "Par", "Bogey", "Double Bogey", "Triple Bogey", "Quadruple Bogey", "Go home, you suck at golf!"]
  function golfScore(par, strokes) {
    if (strokes === 1) {
      return nicknames[0];
    }
    else if (strokes === par - 3) {
      return nicknames[1];
    }
    else if (strokes === par - 2) {
      return nicknames[2];
    }
    else if (strokes === par -1) {
      return nicknames[3];
    }
    else if (strokes === par) {
      return nicknames[4];
    }
    else if (strokes === par +1) {
      return nicknames[5];
    }
    else if (strokes === par + 2) {
      return nicknames[6];
    }
    else if (strokes === par + 3) {
      return nicknames[7];
    }
    else if (strokes === par + 4) {
      return nicknames[8];
    }
    else {
      return nicknames[9]
    }
  }
  console.log(golfScore(4, 2));
  console.log(golfScore(3, 1));
  console.log(golfScore(3, 2));
  console.log(golfScore(5, 2));
  console.log(golfScore(5, 5));
  console.log(golfScore(5, 7));
  console.log(golfScore(5, 20));
  console.log(golfScore(5, 1));

// Switch Statements: instead of using a chained if-elseif-else statement, you can use a Switch Statement.
  // Example
  function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:             // this uses the strict equality operator "===". Basically saying "if (case === 1) {return "alpha"}".
        answer = "alpha";
        break;            // you need a "break;" statement after each "case" so it doesn't run to the next case.
      case 2: 
        answer = "beta";
        break;
      case 3: 
        answer = "gamma";
        break;
      case 4: 
        answer = "delta";
        break;
    }
    return answer;
  }
  console.log(caseInSwitch(2));

// Default Option in Switch Statements: similar to the "Else" in an If-Else statement.
  // Example 
  function switchOfStuff(animal) {
    let answer = "";
    switch (animal) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c": 
        answer = "cat";
        break;
      case "d":
        answer = "dog";
        break;
      default:      // this default statement returns a value when the answer isn't "a", "b", or "c".
      answer = "none of the above";
      break;
    }
    return answer;
  }
  console.log(switchOfStuff("e"));

// Multiple Identical Options in Switch Statements: when you want a switch statement where multiple inputs give the same output.
  // You want to omit the "break" statement to do this.  
  // Example:
  function sequentialSizes(size) {
    let answer = "";
    switch (size) {
      case 1: 
      case 2:
      case 3:
        answer = "low";
        break;
      case 4:
      case 5: 
      case 6:
        answer = "mid";
        break;
      case 7: 
      case 8:
      case 9:
        answer = "high";
        break;
    }

    return answer;
  }
  console.log(sequentialSizes(8))

// Replacing If-Else Chains with Switch
  // If-Else Example:
  function chainToSwitch1(val) {
    let answer = "";
    if (val === "bob") {
      answer = "Marley";
    }
    else if (val === 42) {
      answer = "the answer";
    }
    else if (val === 99) {
      answer = "Missed me by this much!";
    }
    else if (val === 7) {
      answer = "Ate Nine";
    }
    return answer;
  }
  console.log(chainToSwitch1(7))

  // Switch Example with same elements:
  function chaintoSwitch2(val) {
    var caseAnswer = "";
    switch(val) {
      case "bob":
        caseAnswer = "Marley";
        break;
      case 42:
        caseAnswer = "The Answer";
        break;
      case 99:
        caseAnswer = "Missed Me By This Much!";
        break;
      case 7:
        caseAnswer = "Ate Nine";
        break;
      default: "nada"
    }
    return caseAnswer;
  }
  console.log(chaintoSwitch2(99))

// Returning Boolean Values from Functions
  // Example function:
  function isLess1(a, b) {
    if (a < b) {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(isLess1(1, 2));

  // You can change that function to:
  function isLess2(a, b) {
    return a < b;
  }
  console.log(isLess2(4, 2));

// Returning Early Pattern from Functions: typically we've had "return" at the end, but you can leave the function anytime throughout it with a "return" statement.
  function abTest(a, b) {
    if (a < 0 || b < 0) {
      return "undefined";
    }
    else {
      return "defined";
    }
    return Math.round(math.pow(math.sqrt(a) + math.sqrt(b), 2));  // this example return is not relevant due to the previous returns.
  }
  console.log(abTest(-3, 2))

// Card Counting: BlackJack Counting Function
  // Low card (2-6), count goes up
  // High Card (10-A), count goes down
  // Middle card (7-9), count stays the same
  // Count is positive, bet high
  // Zero or negative, hold bets
  // My Attempt (If Statements):
  let count = 0
  let betOrNot = ""
  function cardCounting(card) {
    if (card < 7) {
      count++;
      if (count > 0) {
        betOrNot = "Bet Now!";
      }
      else {
        betOrNot = "Hold Now!"
      }
    }
    else if (card < 10) {
      count = count;
      if (count > 0) {
        betOrNot = "Bet Now!";
      }
      else {
        betOrNot = "Hold Now!"
      }
    }
    else {
      count--;
      if (count > 0) {
        betOrNot = "Bet Now!";
      }
      else {
        betOrNot = "Hold Now!"
      }
    }
    return count + " " + betOrNot;
  }
  console.log(cardCounting(2));
  console.log(cardCounting(10));
  console.log(cardCounting("K"));
  console.log(cardCounting(7));
  console.log(cardCounting(7));
  console.log(cardCounting(7));
  console.log(cardCounting("J"));
  console.log(cardCounting(3));
  console.log(cardCounting(3));
  console.log(cardCounting(3));
  console.log(cardCounting(3));

  // Their example (Switch Statements):
  var cardCount = 0;
  function cc(card) {
    switch(card) {
      case 2: 
      case 3: 
      case 4: 
      case 5: 
      case 6: 
        cardCount++;
        break;
      case 10: 
      case "J": 
      case "Q": 
      case "K": 
      case "A": 
        cardCount--;
        break;
    }
    var holdOrBet = "Hold!"
    if (cardCount > 0) {
      holdOrBet = "Bet!";
    }
    return cardCount + " " + holdOrBet;
  }
  console.log(cc(2));
  console.log(cc("K"));
  console.log(cc("Q"));
  console.log(cc(4));
  console.log(cc(6));
  console.log(cc(7));
  console.log(cc(8));
  console.log(cc("J"));
  console.log(cc(3));
  console.log(cc("A"));

// Build JavaScript Objects: 
  // Ojects are similar to Arrays, but instead of using indexes to access data, you use properties.
  var ourDog = {        // Objects are defined with curly brackets.
    "name": "Camper",   // the Properties are everything before the colon.
    "legs": 4,          // the Values are everything after the colon.
    "tails": 1,
    "friends": ["everything"]
  };
  var myDog = {         // this is another example of an Object.
    "name": "Quincy",
    "legs": "3",
    "tails": "2",
    "friends": [0]      // use commas between each Property/Value until the final one, nothing after it.
  }

// Accessing Object Properties
  // Three main ways to access a Property on an Object
  // Method 1: Dot Notation (available when there's no space in the Properties or the Values)
  let testObj = {
    "hat": "fitted",
    "hatSize": 7.75,
    "shirt": "jersey",
    "shirtSize": "L",
    "shoes": "cleats",
    "number": 23
  };
  let hatValue = testObj.hat;
  let hatSize = testObj.hatSize;
  let shirtValue = testObj.shirt;
  let shirtSize = testObj.shirtSize;
  let playerNumber = testObj.number;
  console.log(hatValue);
  console.log(shirtValue);
  console.log(playerNumber, hatValue, hatSize, shirtValue, shirtSize);
  
  // Method 2: Bracket Notation (used when there is a space in the properties or the values).
    // Can not duplicate within console.log apparently.
  let testObj2 = {
    "an entree": "hamburger helper",
    "my side": "veggies blackened",
    "my drink": "water no ice"
  };
  let myMealValue = testObj2["an entree"];
  let mySideValue = testObj2["my side"];
  let myDrinkValue = testObj2["my drink"];
  console.log(myMealValue);
  console.log(mySideValue);
  console.log(myDrinkValue);

  // Method 3: Variables
  let testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  }
  let qbNumber = 19;
  let qb = testObj3[qbNumber];
  console.log(qb);

// Updating Object Properties (you can use Dot notation to do so).
  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog.name = "Happy Camper";  // this is where the variable is updated.
  console.log(ourDog.name);

// Add new Properties to an Object (can use Dot Notation OR Bracket Notation)
  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
  }
  ourDog.bark = "bow-wow!";  // Dot Notation
  console.log(ourDog);   //ourDog now includes bark: "bow-wow!"

  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  }
  myDog['bark'] = "woof!";  // Bracket Notation
  console.log(myDog);       // myDog now includes bark: "woof!"

// Delete Properties from an Object
  // 'delete' keyword
  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow-wow!"
  }
  delete ourDog.bark;  // you can use the delete keyword to get rid of a Property.
  console.log(ourDog);

// Using Objects for Lookups
  // Objects can be thought of as a key-value storage like a dictionary.
  // You can use an Object to look up Values rather than a Switch or If statement.
  // THIS IS THE SAME AS...
  function phoneticSwitchLookup(val) {
    var result = "";
    switch(val) {       // we can replace this Switch Statement with an Object, and use the Object for lookups.
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
        break;
    }
    return result;
  }
  console.log(phoneticSwitchLookup("foxtrot"));
  // THIS:
  function phoneticObjectLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
  }
  console.log(phoneticObjectLookup("bravo"));
  console.log(phoneticObjectLookup("echo"));

// Testing Objects for Properties
  // Checking if an Object has a Property with the hasOwnProperty method.
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  function checkObj(checkProp) {   // this function is checking if an Object (checkObj) has a specific Property (checkProp).
    if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
    }
    else {
      return "Not Found";
    }
  }
  console.log(checkObj("gift"));
  console.log(checkObj("hello"));
  console.log(checkObj("bed"));
  console.log(checkObj("freak"));

// Manipulating Complex Objects
  // A JavaScript Object is a way to store flexible data.
  // You can store Strings, Numbers, and Arrays, and even other Objects.
  var myMusic = [           // Array
    {                       // Objects
      "artist": "Billy Joel",   // Key Value Pairs
      "song title": "Piano Man",
      "release year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {                          // here's another Object
      "artist": "Eminem",   
      "song title": "Square Dance",
      "release year": 2001,
      "formats": [
        "CD",
        "Digital"
      ],
      "gold": false
    }
  ];

// Accessing Nested Objects
  // Example
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jack"
      }
    }
  };                                         // 👇🏼 has to have brackets because of the space
  var gloveBoxContents = myStorage.car.inside["glove box"]; 
  var trunkContents = myStorage.car.outside.trunk;

  console.log(gloveBoxContents);
  console.log(trunkContents);

// Accessing Nested Arrays
  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];                    // 👇🏼 second element in the myPlants array
  var secondTree = myPlants[1].list[1];
  console.log(secondTree);       // 👆🏼 second element of the list array
  var thirdFlower = myPlants[0].list[2];
  console.log(thirdFlower);  // this returns "dandelion"

// Record Collection  REDO THIS ONE, I DIDN'T REALLY FOLLOW IT!!
  // Challenge
  var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love A Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Rob Palmer",
      "tracks": []
    },
    "5439": {
      "album": "ABBA Gold",
    },
  }                   // 👇🏼 this is just a fancy JS way of making a copy of the object
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  function updateRecords(id, prop, value) {
    if (value === "") {
      delete collection[id][prop];
    }
    else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = value;
    }

    return collection;
  }

  console.log(updateRecords(5439, "artist", "ABBA"));
  console.log(updateRecords(2468, "tracks", "test"));

// Iterate with While Loops (Loops allow you to run the same code multiple times).
  // "While" Loops run while a specified condition is true and stops once it's no longer true.
  var myArray = [];  // we are going to push the digits 0-4 on to this array.
  var i = 0;         // this is what i starts at.
  while(i < 5) {
    myArray.push(i); // .push adds to the array
    i++;            // this ensures the loop eventaully ends (incrementing i by 1).
  }
  console.log(myArray);  // this returns 5 values: 0, 1, 2, 3, 4

// Iterate with For Loops (the most common type of loop in JS).
  var ourArray = [];
    // 👇🏼 initialization; condition; and final expression 
  for (var i = 0; i < 100; i += 2) {  // += is how you say i = i + x
    ourArray.push(i);
  }
  console.log(ourArray); // 50 results, increments of 2 from 0 - 100

  var myArray = [];
  for (var i = 1; i <= 50; i++) {
    myArray.push(i);
  }
  console.log(myArray);  // 50 results, increments of 1 from 1 - 50

// Iterate Odd/Even Numbers with a For Loop
  // Odd numbers
  var oddArray = [];
  for (var i = 1; i < 26; i += 2) {
    oddArray.push(i);
  }
  console.log(oddArray);

  // Even numbers
  var evenArray = [];
  for (var i = 0; i < 26; i += 2) {
    evenArray.push(i);
  }
  console.log(evenArray);

// Count backwards with a For Loop
  // Even Numbers
  var backwardsArrayEven = [];
  for (var i = 100; i > 0; i -= 2) {
    backwardsArrayEven.push(i);
  }
  console.log(backwardsArrayEven);

  // Odd Numbers
  var backwardsArrayOdd = [];
  for (var i = 99; i  > 0; i -= 2) {
    backwardsArrayOdd.push(i);
  }
  console.log(backwardsArrayOdd);

// Iterate Through an Array with a For Loop  (this is basically counting how many values there are in the array, and adding them to each other)
  // Typcially we have added items to an array.  If an array already exists, we can iterate through it with a For Loop.
  var ourArr = [9, 10, 11, 12];
  var ourTotal = 0;
  for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
  }
  console.log(ourTotal);  
  // Example 2: 
  var myArr = [2, 3, 4, 5, 6];
  var myTotal = 0;
  for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i];
  }
  console.log(myTotal);

// Nesting For Loops
  // if you have a multi-dimesional (or nested) Array, you can use a Nested For Loop to access all the Array elements.
  function multiplyAll(myArray) {
    var product = 1;
    for (var i = 0; i < myArray.length; i++) {        // this line is multiplying all the answers to this 👇🏼 together
      for (var j = 0; j < myArray[i].length; j++) {  // basically this line is multiplying all the blue arrays together (arrays within the arrays)
        product *= myArray[i][j];                    // basically saying product = product * myArray [outer array][inner arrays]
      }
    }

    return product;
  }
  var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  console.log(product); // answer is 5040 = (1*2)*(3*4)*(5*6*7) 

// Iterate with Do...While Loops
  // While loops first checks the condition before running any code.
  // A Do...While Loop always runs at least one time, and then it will check the condition.
  var myArray = [];
  var i = 10;
  // This is a While Loop:
  while (i < 5) {    // this isn't going to do anything in the array because the array starts out higher than 5 (the condition (i < 5)).
    myArray.push(i);
    i++;
  }
  console.log(i, myArray);  // this equals 10 and an empty array [].
  // This is a Do...While Loop:
  do {
    myArray.push(i);   //this is run at least once before it checks the condition (i < 5).
    i++;
  } 
  while (i < 5);  // in this case, once it checks the condition it will break out of the loop.
  console.log(i, myArray);  // this equals 11 and [10].

// Profile Lookup
  // Challenge
  var contacts = [ 
      {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
    },
      {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
      {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
    },
      {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
    },
  ];
  function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {   //this is basically checking each value to see if the value we pass in the function is present.
      if (contacts[i].firstName === name) {       // this is checking if the parameter you passed in === any of the values in the array.
        return contacts[i][prop] || "No such property."         // if it finds the name, return the associated property with the name.  The OR || property is used instead of the "else" here, to be fancy.
      }      
    }
    return "No such contact.";
  }
  var data = lookUpProfile("Harry", "likes");
  console.log(data);