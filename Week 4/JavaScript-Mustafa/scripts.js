// 1- Write a console.log statement saying "Hello World!" for each language that you know.

console.log("Hello World"); //English
console.log("أهلا بالعالم"); //Arabic
console.log("سلام به جهان"); //Farsi

// 2- Finding a solution for the syntax error

console.log("I'm awesome");



// 3- Declare a variable x and initialize it with an integer
// First, declare your variable x (do not initialize it yet).
// Add a console.log statement that explains in words what you think the value of x is
// Add a console.log statement that logs the value of x.
// Now initialize your variable x with an integer.
// Next, add a console.log statement that explains what you think the value of x is.
// Add a console.log statement that logs the value of x.

var x;
console.log("The value of X will be 7");
x = 7;
console.log("The value of x is " + x);
console.log( x );


// 4 - Declare a variable y and assign a string to it.
// Write a console.log statement in which you explain in words what you think the value of the string is.
// Now console.log the variable y.
// Now assign a new string to the variable y.
// Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
// Now console.log y again.
var y = "This morning is sunny";
console.log("The value of string will be: " + y);
console.log(y);
y += ", but it will rain in few hours "
console.log(" The value of string will be : " + y);
console.log(y);


// 5 - Declare a variable z and assign the number 7.25 to it.
// console.log z.
// Declare another variable a that has the value of z but rounded to the nearest integer.
// console.log a.
// So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// console.log the highest value.
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);

 if ( z > a ) {
  console.log("Z is the highest value");
} else if( z < a){
  console.log("a is the highest value");
}


//  6 - Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.
// Write a console.log statement that explains in words what you think the value of the array is.
// console.log your array.
// Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
// Log your array.
// Add a statement that adds Syeda’s favorite animal ('kitten') to the existing array.
// Log your new array!

console.log("The value of the array is a list of favourite animals")
var favAnimals = [
  "lion",
  "penguin",
  "horse"
];
console.log(favAnimals.join(" "));
favAnimals.push("kitten");
console.log(favAnimals.join(", "));

// 7 - More strings: Let's consider the following string: let myString = "this is a test".
// Add the string to your file and console.log it.
// Find a way to get the length of myString.
// console.log the length of myString.

let myString = "this is a test";
console.log(myString);
console.log(myString.length);


// 8 -  If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// Add at least 3 console.log statements in which you show that you understand what % does.

var x = 7;
x %= 3;
console.log( "the value of x is divided by 3" )
console.log( " 1 is the the remainder after division of 7 by 3" )
console.log( x );


// 9- Write a program to answer the following questions:
// Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
// Can you compare infinities? Does 6/0 === 10/0? How can you test this?
// Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
var multipleData = [
"Hello world",
true,
3999,
2.3
];


var infinities = (6/0 === 10/0);
console.log("the comparison is " + infinities);
