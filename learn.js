alert("I am added");
/*
not allowed variable in js 
    var 1meme; number
    var me me; space
    var #meme; #
    var meme%; %

*/
//PRIMITIVE DATA TYPE
//number
var car = 7;
console.log(car);
//string
var city = "Jabalpur City";
console.log(city);
//Template Literals
console.log(`Look how
    cool this string is.
    It is on multiple lines!
    using tempelate literals`);
/*
    An alternate way to work with strings in JavaScript is template literals. 
    Template literals are useful because they support multiple lines and 
    string interpolation (being able to insert variables).
*/
//String Interpolation
/*
    String interpolation lets you easily use variables inside your strings
    via its  ${variable} syntax.
    NOTE: this is logged by using template literals
*/
var result = "fail";
console.log(`if you ${result} you are on right track pal :)`);
/*
    Packaged with strings are some pretty useful and common methods to know. Here are a few of them.
*/
//toLowerCase
var text = "LEts See YoU Can Deal With It oR Not";
console.log(text.toLowerCase());
//toUpperCase
console.log(text.toUpperCase());
//replace
text = "This is red house";
console.log(text.replace("red", "blue"));
//includes
/*
    his method checks to see if a substring exists inside another string,console.log(text.includes("blue"));
    and returns true if it is or false if it's not.
*/
console.log(text.includes("red"));
console.log(text.includes("blue"));
//boolean
//A boolean is a data type that has only two values, true and false.
var pizzaIsGood = true;
var wholeFoodsIsCheap = false;
//Symbols
/*
Symbols are tokens that serve as unique IDs. Because each one is different, 
you can use this to your advantage.
*/
const SIZE_XSMALL = Symbol();
const SIZE_SMALL = Symbol();
const SIZE_MEDIUM = Symbol();
const SIZE_LARGE = Symbol();
const SIZE_XLARGE = Symbol();
console.log(SIZE_XSMALL);
//now you can use it as a unique it as follows
function getShirtsLeftInSize(size){
    if(size == SIZE_SMALL){
        return 5;
    } else if (size = SIZE_XSMALL){
        return 6;
    } else if (size = SIZE_MEDIUM){
        return 7;
    } else if (size = SIZE_LARGE){
        return 8;
    } else if (size = SIZE_XLARGE){
        return 0;
    }
}
var mySize = SIZE_SMALL;
console.log("There are " + getShirtsLeftInSize(mySize) + " shirt left in your size.");
//null
/*
    Null is a special value in JavaScript that essentially means nothing.
*/
var nothing = null;
console.log(nothing);
//undefine
/*
    Undefined is another special value in JavaScript. When a variable is declared but not initialized,
    its value is undefined, because no value was given to that variable.
*/
var unDecelared;
console.log(unDecelared);
/*=====================================MATHS IN JS==================================================*/
// Addition

// adding numbers
var blueCars = 4;
var redCars = 5;

var totalCars = blueCars + redCars;

console.log("I have " + totalCars + " cars!");

//This is the shorthand way to add 1 to the value of a variable:
var burritos = 4;
burritos++; // adds 1

console.log("I have " + burritos + " burritos!");


// This is the shorthand way to add an arbitrary number to the value of a variable:


var books = 10;
books += 20; // adds 20 books

console.log("I have read " + books + " books!");
/*SAME YOU CAN DO FOR SUBS,MULTI,DIVIS*/
//modulus
var people = 20;
var peoplePerCar = 6;
var peopleInLastCar = people % peopleInLastCar;
console.log("The last car will have " + peopleInLastCar + " people in it.");
// order of operations
/*
    Order of Operations, also known as PEMDAS is at play here, including with the use of parentheses.
*/
var x = (5 * 3) + 10 / 2;

console.log("The value of x is " + x + ".");
/*MATH PROPERTIES*/
//eular no 
var eular = Math.E;
console.log(eular);
//PI
var pi = Math.PI;
console.log(pi);
/*Math method*/
//absolurte number
var a =  6;
var b = -13;
console.log("Absloute value of a is " + Math.abs(a));
console.log("Absloute value of a is " + Math.abs(b));
//floor
/*
    The floor method rounds a number down to the nearest integer. 
    Put a number inside  Math.floor() and you're good to go.
*/
var decimal = 45.33;
console.log("the value of floor is " + Math.floor(decimal));
//ceiling
/*
    The ceiling method rounds a number up to the nearest integer.
    Put a number inside  Math.ceil() and you're good to go.
*/
console.log("the value of floor is " + Math.ceil(decimal));
//logarithm
/*
    you can get the netural log of a number i.e base e
*/
var number = Math.log(1);
console.log("The value of number is " + number + ".");
//Maximum
var maxNum = Math.max(14,52);
console.log("Maximum No is" + maxNum);
//minnimum
var minNum = Math.min(53,12);
console.log("Minimum No is" + minNum);
//power
number = Math.pow(3,3);
console.log("cude root of 3 is" + number);
//random
/*
    To get a random number in JavaScript, there's a Math.random() method for that.
    By itself, it just returns a number between 0 and 1.
*/
var random = Math.random();
console.log("val of random is "+random);
/*
    you can get the value between any two no using
*/
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = randomBetween(5, 25);
console.log("The value of random is " + random + ".");
//Round 
number = Math.PI;
console.log("the rounded number is " + Math.round(number));
//square root 
var root = Math.sqrt(81);
console.log("value of root is " + root);
/*=========================================LOGICS==================================================*/
//equality operator
/*
to decide weather two var are equal in terms of value and datatypes
it will return true if both the var are same else false
*/
console.log(5 === 5);

var pears = 40 / 2;
console.log(20 === pears);

console.log(17 === 10);
//inequality operator

/*
    The inequality operator works basically like the equality operator but in the reverse. 
    If two numbers are the same, it will result in false, while if two numbers are different,
    it will result in true.
    To use this operator, you use a single exclamation point followed by two equal signs.
*/
console.log(9 !== 7);

var oranges = 5 * 6;
console.log(30 !== oranges);

console.log(57 !== 57);
//graterthen lessthen operators
console.log(6 < 4);
console.log(8 < 13);

books = 32;
console.log(books > 30);
console.log(books > 50);
//or equals to operator
console.log(29 <= 94);
console.log(13 <= 9);

console.log(32 >= 32);
console.log(42 >= 85);
//CONDITION
/*
    Now that we know how to return true or false when we compare two values, we are now ready to act
    on that result. In other words, we want to do one thing if the result is true and another thing 
    if the result is false.
    This is called a conditional.
*/
//IF , ELSE
var candy = 110;
if (candy >= 110) {
    console.log("you got the cavity!!");
} else if(candy <=10){
    console.log("hurrey no cavuty");
} else {
    console.log("you can eat more");
}
// ternary operator
var isEven  = (number % 2 === 0)? "Yes" : "No";
console.log("is " + number + " is even\n"+isEven);
//logic operator
//AND
/*
    By using the and operator, the code block will only execute if both conditions are true:
*/
var wearingShoes = true;
var needsTying = true;

if (wearingShoes && needsTying) {
    console.log("I should tie my shoes!");
}
//OR
/*
    Consider the case where you want some candy but don't really care what kind. This is a perfect
    opportunity to use the or logical operator.
*/
var thereIsSnickers = false;
var thereIsSkittles = true;

if (thereIsSnickers || thereIsSkittles) {
    console.log("I'm glad there's candy in this house!");
}
//NOT
/*
     you can test the opposite value of an outcome by using the not operator. Let's say you only wear
     boots when it isn't hot.
*/
var temperature = 50;
var itIsHot = temperature > 70;

if (!itIsHot) {
    console.log("I will wear my boots today!");
}
//LOOPS
//for
console.log("I am using for loops");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//while
console.log("I am using for while");
while(i<20) {
    console.log(i);
    i++;
}
//do while 
/*
    do while loop is very similar to a normal while loop except that the block of code being looped
    over is guaranteed to run at least once.

    This is because it first does the code inside the loop, then checks the condition to determine if
    it needs to loop again or not.

    Consider the situation where you're really hungry and so you bought a family-sized bag of chips.
    They come with 100 chips and since you're starving, each time you go to grab some, you pull out
    20 at a time.
*/
var chips = 100;

do {
    console.log("With " + chips + " chips left, I can eat.");
    chips -= 20;
} while (chips > 0);

console.log("My chips are gone now. I am sad. :(");
//for in loops
/*
    A for in loop iterates through the properties of an object and the positions in an array.
*/

var colors = ["red", "white", "blue"];

for (var i in colors) {
    console.log(colors[i]);
}
var person = {
    name: "Tom",
    weight: "150",
    age: 40
};

for (var property in person) {
    console.log("This person's " + property + " is " + person[property] + ".");
}
//break
/*
    While you are inside of a loop of any kind, JavaScript allows you to terminate the loop whenever
    you want via the break statement.
*/
for (var i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}
//contunue
/*
    With the continue statement, you can tell the browser to continue on to the next loop, 
    without finishing the rest of the code block.
*/
for (var i = 1; i <= 10; i++) {
    if (i == 3 || i == 7) {
        continue;
    }
    console.log(i);
}

