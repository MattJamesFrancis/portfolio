// alert("hello, world!");		

/* 

if (condition) {
	code goes here
}

(if b > 20) {
	code goes here 
}

(if c===99) {
	code goes here
	use double or triple equals
	don't use single equals
}

*/

/* var amount = 500;

if ( amount < 1000 ) {
	alert("It's less than 1000");
} */ 

// note, you tecnically don't need to add curly braces for one line of code, but you should always do it.

// OPERATORS AND EXPRESSIONS

/*

 + - * /
 
  = means ASSIGNMENT OPERATOR
	
	result = a + b;
	
	equals signs MEANS ASSIGNING VALUE
	
	score =+ 10 means add ten to the variable score.
	
	Just like math, order of operations APPLIES aka PEMDAS.
	
	result = 5 + 5 * 10;
	
	
ASSIGNMENT INSTEAD OF EQUALITY is a mistake


var a = 5
var b = 10
if (a = b) {
	//always true!!!
	//you should use = is ASSIGNMENT, == is EQUALITY, and === is STRICT EQUALITY.
	
	strict equality will check to see if they're not only the same VALUE, but also the same TYPE.
}

LOGICAL AND/OR

if ( a === b && c === d ) {
	a is strictly equal to b and c is strictly equal to d
}

if ( a === b || c === d ) {
	a is strictly equal to b or c is strictly equal to d
}


MODULUS

var year = 2003;
var remainder = year % 4;

this means divide the variable year by 4

INCREMENT/DECREMENT

a = a + 1;

a += 1;

a++; 

TERNARY

ternary works on three elements

condition ? true : false

asking a question, then finding out what happens if it's true and if false. MINI if/else statement.

var playerOne = 500;
var playerTwo = 600;

//sometime laster

var highScore;

if (playerOne > playerTwo){
	highScore = playerOne;
}

else {
	highScore = playerTwo;
}

ALTERNATIVELY...

var highScore = (playerOne > playwerTwo) ? playwerOne : playwertwo ;


WORKING WITH LOOPS

repeat x amount of times {
	statement one
	statement two
}

for every link {
	statement one
	statement two
}

WHILE LOOP = most basic loop

var a = 1;

while ( a < 10 ) {
	console.log(a);
	a++;
}

DO... WHILE LOOP

var a = 1;

do {
	console.log(a);
	a++;
} while ( a < 10 );


FOR LOP

for ( var i = 1 ; i < 10 ; i++ ) {
	do stuff
	do stuff
	do stuff
}

THREE STEPS

1. setup index 2. check condition 3. increment index

BREAK

for ( var i = 1 : i < 5000 : i++) {
	do stuff
	do stuff
	if (i == 101) {
		break;
	}
	//do stuff
}

this type of loop will break you out of the loop once that i == 101 is true.

CONTINUE

for ( var i = 1 ; i < 5000 ; i++) {
	do stuff
	do stuff
	if (i % 5 == 0){
	continue; //done with this iteration
	}
	do second set of stuff
	do second set of stuff
}

function myFunction () {
	loops
	statements
	anything
}

//sometime later

myFunction();
myFunction();
myFunction();
if it's in a funtion, it won't run unless you call it

Define functions BEFORE you call them = best practice

FUNCTIONS WITH PARAMETERS

function myFunction ( parameters ) {


}

function myFunction ( x,y ){
	var myVar = x * y;
	console.log(myVar);
}

function calculateLoan (amount,months,interest,name) {
	//lots of code
}

calculateLoan(1000,60,5,"Sam Jones"); correct
calculateLoan(4000,30,6,"Sam Jones","Something Good"); extras are ignored

calculateLoan(4000,30); missing are pased as undefined

------------------------------------------------------

VARIABLE SCOPE

var foo; GLOBAL VARIABLE (declared outside function)

function simpleFunction(){
	lots of code
	var foo = 500;        LOCAL VARIABLE
	lots of code
	console.log(foo); 500
}

simpleFunction();
console.log(foo); undefined

---------------------------------------------------------

CREATING ARRAYS

Square brackets = array with multiple values
JavaScript uses a zero-based index (starts at zero not one)

var singleValue;
singleValue = 99;

var multipleValues = [];

multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "Mouse";

console.log(multipleValues[2]); = "Mouse"

CREATING ARRAYS - SHORTHAND

var multipleValues = [50,60,"Mouse"];
                     [0] [1]   [2]
										 
CREATING ARRAYS - LONGHAND

var multipleValues = [1] = most straight forward way
var multipleValues = new Array(); arrays are objects
var multipleValues = Array ();
var multipleValues = Array(5);

var multipleValues = [10,20,30,40,50];

console.log(multipleValues.length); length is 5

ARRAY METHODS

someFunctimon(params); // to call a function
methods are functions that belong to an object
someObject.someMethod(); // to call a method
var multipleValues = [10,20,30,40,50];
var reversedValues = multipleValues.reverse();
																		.join();
																		.sort();

ARRAYS ARE EVERYWHERE

var myArrayOfLinks = document.getElementsByTagName("a");

will return everything that has an anchor tag, it will result in an array 

[0]<a href="...">
[1]<a href="...">
[2]<a href="...">

---------------------------------------------------------

NUMBERS

var x = 200;

JavaScript numbers are 64-bit floating point numbers.

ADDITION VS CONCATENATION

var foo = 5;
var bar = 5;

console.log(foo + bar); //10

var foo = "5";
var bar = "5";

console.log(foo + bar); //55

concatenate is useful for phone numbers, etc.

var foo = 5;
var bar = "5";
console.log(foo + bar); //55 - treats one as string

var foo = 5;
var bar = "b";
console.log(foo*bar); //NaN = NOT A NUMBER

var foo = "55"; //could be "abc"
var myNumber = Number(foo); //make it a number


//double negative if NOT NOT a number

if ( !isNan(myNumber)){
	console.log("It's not a number!");
}

USING THE MATH OBJECT

var x = 200.6;
var y = Math.round(x); //201

var a = 200, b = 1000, c = 4;
var biggest = Math.max(a,b,c);
var smallest = Math.min(a,b,c);

----------------------------------------------------------

STRINGS

var phrase = "This is a simple phrase."

console.log(phrase.length); //24

STRING METHODS

var phrase = "This is a simple phrase.";

console.log(phrase.toUpperCase() );


SPLIT

var phrase = "This is a simple phrase.";
var words = phrase.split(" ");

STRING METHODS - INDEXOF

var phrase = "We want a groovy keyword.";
var position = phrase.indexOf("groovy"); //10

//it returns -1 if the term is not found

if ( phrase.indexOf("DDD")) === -1) {
	console.log("That word does not occur.");
}

-------------------------------------------------------

OBJECTS IN JAVASCRIPT

Arrays, Dates, Self Contained Pieces, etc.

An object is a container that gathers together some data and behavior.

var playerName = "Fred";
var playerScore = 10000;
var playerRank - 1;

All of these belong together. You can enclose them in an object.

var player = new Object();

This creates new generic object container called player

What do we want internal pieces to be?

var plyaer = new Object();
player.name = "Fred";
player.score = 10000;
player.rank = 1;

var player1 = { name: "Fred", score: 10000, rank: 1 };
var player2 = { name: "Sam", score: 100000, rank:5 }

console.log(player1.name); //Fred

function playerDetails(){
	//display information about each player
	console.log(this.name + "has a rank of: " +
	this.rank + " and a score of " + this score);
}

player1.logDetails = playerDetails;
player1.logDetails = plyaerDetails;


player1.logDetails();
player2.logDetails();

----------------------------------------------------------

WHAT IS THE DOM?

Document Object Model

Document

	- The web page
	- Can be represented in different ways (browser view, source code, etc.)

Object

	- Anything that makes sense to treat as an individual piece, even if it contains other things (elements, components, indidivudal pieces of a page, h1 tags, ul tags... all of these things are objects).
	- There is a JavaScript term for every piece.
	
Model

	- The model of the page
	- You should be able to organize any HTML page and represented it as a tree structure
	- What do we call these things? How do we describe the relatinoships between them?
	- The model is simply a set of terms that we agree on, standards.
	
	
WHAT WE END UP WITH:

"An agreed upon set of terms that describe exactly how to interract with the pieces of the web page"

Not a language, it's an idea, a convention.

WHAT YOU CAN DO WITH THE DOM

	- Get the title text
	- Get the second paragraph
	- Get the third link in th emenu and set its CSS to display: none
	- Change the background color of all paragraphs with a class of "important"
	- Get all the <li> elements in the last unordered list
	- Find the image with an id of "logo" and move it 40 pixels to the right
	- Change a link so it performs a JavaScript function when clicked
	- Create a new unordered list and insert between first and second paragraphs
	- AND MUCH MUCH MORE
	
----------------------------------------------------------

NODES AND ELEMENTS
	
	- Even the smallest document has the smallest nodes
	
	
	THERE ARE 12 NODE TYPES:
	
	- Node.ELEMENT_NODE == 1
	- Node.ATTRIBUTE_NODE == 2
	- Node.TEXT_NODE == 3
	- Node.CDATA_SECTION_NODE == 4
	- Node.ENTITY_REFERENCE_NODE == 5
	- Node.ENTITY_NODE == 6
	- Node.PROCESSING_INSTRUCTION_NODE == 7
	- Node.COMMENT_NODE == 8
	- Node.DOCUMENT_NODE == 9
	- Node.DOCUMENT_TYPE_NODE == 10
	- Node.DOCUMENT_FRAGMENT_NODE == 11
	- Node.NOTATION_NODE == 12
	
	ONLY INTERESTED IN 3:
	
	- Node.ELEMENT_NODE == 1
	- Node.ATTRIBUTE_NODE == 2
	- Node.TEXT_NODE == 3
	
	
<ul id="optionList">
	<li>This is the first option</li>
	<li>This is the second option</li>
	<li>This is the third</li>
</ul>


	Ul = element node
	id = attribute node
	li = element node
	"This is..." = text node
	
	Typically interested in grabbing the elements first. 
	
---------------------------------------------------------

RETRIEVING AN ELEMENT BY ID

ul id="abc"

var myElement = document.getElementById("abc");

---------------------------------------------------------

RETRIEVING MORE THAN ONE ELEMENT

document.getElementsByTagName("a");

goes through our document and gives us any element we call

var myListItems = document.getElementsByTagName("li");




















