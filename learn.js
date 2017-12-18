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
/*============================================FUNCTIONS============================================*/
//creating a function
function introduction() {
    console.log("hello world form js-cheetsheet functions");
}
//calling
introduction();
//parameters
function para(text){
    console.log("displaying " + text);
}
para(text);
//return 
//Functions can return data to us.
function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

var radius = 3;
var area = getAreaOfCircle(radius);
console.log("A circle with a radius of " + radius + " has an area of " + area + ".");

/*==========================================ARRAYS=================================================*/
/*
    Data type that is built using primitive data types and that is an array. Arrays are a list of a
    data type that can then be stored in a single variable.
*/
// creation
var drinks = ["water", "juice", "milk", "soda"];
//retreving 
console.log(drinks[0]);
for (var i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}
//reassignment
drinks[2] = "coffee";
console.log(drinks);
//ARRAY METHODS 
//Sort
/*
    You can sort you array by calling the sort method on it.
*/

var sortedDrinks = drinks.sort();
console.log(sortedDrinks);
//Push
/*
    With push, you can easily add new items to the end of your array. Just call push on your array
    with the new item you want to add.
*/
drinks.push("tea");
console.log(drinks);
//Pop
/*
    Pop is the opposite of push. Call pop on your array to remove the last item in your array.
*/
drinks.pop(); // remove the last item in this array

console.log(drinks);
//Shift
/*
    The shift method removes the first element of an array and then returns that element to you.
*/
var chocolates = ["Snickers", "Kit-Kat", "Twix"];

var snack = chocolates.shift();

console.log(snack);
console.log(chocolates);
//Unshift
/*
    The unshift method adds elements to the beginning of the array and returns the new array's
    length to you.
*/
var chocolates = ["Snickers", "Kit-Kat", "Twix"];

var newLength = chocolates.unshift("Milky Way", "3 Musketeers");

console.log(newLength);
console.log(chocolates);
//Concat
/*
    You can create a new array by concatenating two existing arrays. All you need to do is call 
    concat on one array, with the second array being the parameter.
*/
var healthyDrinks = ["water", "milk"];
var unhealthyDrinks = ["juice", "soda"];

var allDrinks = healthyDrinks.concat(unhealthyDrinks);
console.log(allDrinks);
//Slice
/*
    Using slice, you can return a brand new array containing elements from a slice of the original
    array. It's pretty simple to use, simply provide the method with the starting and ending indexes
    and it will do the rest.
*/
var colors = ["purple", "red", "white", "blue", "gold"];

var slice = colors.slice(1, 4);
console.log(slice);
//If you only provide one parameter, it will use that number as the starting point, and copy the rest of the array.
slice = colors.slice(3);
console.log(slice);
//Finally, if you provide a negative index, it will just start from the end and go backwards.
slice = colors.slice(-3);
console.log(slice);
//splice 
//If you don't want to return a new array, you can use splice.
var foods = ["burger", "pizza", "donut", "bread", "pasta"];

foods.splice(2);
console.log(foods);
/*
    If you provide a second parameter, you can specify the number of elements to remove from the
    array starting from that index.
*/
foods = ["burger", "pizza", "donut", "bread", "pasta"];

foods.splice(2, 1);
console.log(foods);
//MAP
/*
    When you want to iterate over an array, you could use a loop. However, you could also use map.
*/
 var names = ["Ram", "Shyam", "Pari"];

    var intros = names.map(function(name) {
    	return "My name is " + name;
    });

    console.log(intros);
//filter
/*
    The filter method is useful for, well, filtering out elements you don't want from an array to
    form a new one.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var odd = numbers.filter(function (number) {
    return number % 2 == 1;
});

console.log(odd);
//Reduce
/*
    reduce goes over every element and collects some information about each element, and then finally 
    returns the result.
*/
/*
    A simple way to demonstrate reduce is to use it to sum up all the numbers in an array.
    or according to medium :
    "Reduce Method In JavaScript​ gives you a mini CodePen where you can write whatever logic you want. 
    It will repeat the logic for each amount in the array and then return a single value."
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var total = numbers.reduce(function (total, number) {
    return total + number;
});

console.log(total);
/*
    detailed explation for those who are new to functional programming
    note: reduce method loop thorugh each member of array just like for loop
    so, when loop starts the value of total is at the far left(i.e 1) and number is the current
    value (i.e 2) and in this example we want to add total with the number every time we loop 
    this is whay we use "toatal + number" and calculation is repeated for each number of array but
    each time current value changes to next number
    When there are no more numbers left in the array the method returns the total value.
*/ 
//more examples of .reduce
//average using reduce
const average = numbers.reduce((total, amount, index, array)=>{
    total += amount;
    if( index === array.length-1){
        return total/array.length;
    }else{
        return "Unexpacted error";
    }
});
//index will give index of a given array and array will give number array itself
//The thing is, you don’t always have to return a single value. You can reduce an array into a new array.

/*
    For instance, lets reduce an array of amounts into another array where every amount is doubled.
    **To do this we need to set the initial value for our accumulator to an empty array.
    
    The initial value is the value of the total parameter when the reduction starts. You set the
    initial value by adding a comma followed by your initial value inside the parenthesis but after
    the curly braces
    const average = numbers.reduce((total, number, index, array)=>{
        total + amount;
        return total/array.length;
    }, 0);
*/

/*
    By setting the initial value to an empty array we can then push each amount into the total.
    If we want to reduce an array of values into another array where every value is doubled, 
    we need to push the amount * 2. Then we return the total when there are no more amounts to push.
*/
const double = numbers.reduce((total, amount, index, array)=>{
    return total;
    total.push(amount*2);
},[]);
console.log(double);
/*
    The benefit of using reduce comes into play when you want to map and filter together and you have
    a lot of data to go over.
    for more info hit to https://medium.freecodecamp.org/reduce-f47a7da511a9
    */
/*=========================================OBJECTS=================================================*/
/*
An object in JavaScript is a collection of attributes that collectively describe a "thing".
That "thing" could be anything you want: a pencil, a person, a hat, or a car.
*/
// creation 
var dog = {
    name: "Cooper",
    age: 3,
    bark: function () {
        console.log("BORK BORK");
    }
};
/*
    This creates a new object with the properties name, age, and bark, and initializes the variable
    dog to that.
*/
//retrival
console.log(dog.name);
console.log(dog.age);
dog.bark();
//reassignment
dog.age = 4;
dog.weight = 20;
//METHODS
//hasOwnProperty
/*
    As the name implies, the hasOwnProperty method lets you check if an object has a property or not.
*/
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("notHere"));
//key
//instead of checking some parameter you can check all the properties 
console.log(Object.keys(dog));
//values
/*
    insted of all the keys you want all the values you can use values method
*/
console.log(Object.values(dog));
//entries
/*
    if you want both keys and values use entries method
*/
console.log(Object.entries(dog));
/*============================================CLASSES==============================================*/
/*
Classes in JavaScript provide a blueprint for the creation of objects. This means that once you
define a class (including its member variables and methods), you can endlessly create new objects
from it. This is useful because it allows us to reduce the amount of code we need to write when we
want multiple objects that are similar to one another.
*/
/*
                        class pet {
                        }
                        var cow = new pet();
                        consoel.log(cow + "this is new object from class");
*/
// constructing class
class Pet { // convention P is uppercase
    constructor(name, weight, price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    getInfo(){
        return "Hii, my name is " + this.name + ", I weigh " + this.weight + "kgs and I worth " + this.price + " Rs";
    }
}

var Cow = new Pet("radha", 750, 15000);
console.log(Cow);
console.log(Cow.getInfo());
//Class inheretanc 
/*
    While our current solution works for now, it can certainly be improved upon. Our Pet class doesn't
    offer any distinction between cow and dog, which each would have additional information that
    doesn't apply to the other. Luckily for us, JavaScript offers class inheritance, which means we
    can create new classes that inherit everything from another, but adds unique information for 
    itself. This means that since a dog is still a pet, we can just inherit from the Pet class and
    add any dog-specific stuff in the Dog class.
*/
class Dog extends Pet {
    bark() {
        console.log("BARK BARK BARK");
    }
}
//created a new clas which inherets all the properties of Pet
var dog = new Dog("Chubby", 4, 10000);
console.log(dog.getInfo());
console.log(dog.bark());
//function overriding 
class Cat extends Pet {
    constructor(name, weight, price, brand){
        super(name, weight, price);
        brand = this.brand;
    }
    getFavourateBrand() {
        return this.brand;
    }
    getInfo(){
        return "Hi, I'm a cat named " + this.name + " and I like " + this.brand + ". I weigh " + this.weight + " pounds and cost " + this.price + " Rs";
    }
}

var honey  = new Cat ("honey", 7, 1500, "Catchip");
console.log(honey.getInfo());
console.log(honey.getFavourateBrand());
/*
    This is simply manually calling the constructor of the class that Cat is inheriting from, in this
    case, the Pet class. The only reason this is needed is because we added a new parameter to the 
    constructor of Cat, and that is the brand string.
    and we override the getInfo function
*/
/*=========================================SETS====================================================*/
/*
    Sets are an object type that let you create a collection of values that must be unique. 
    This is useful in cases when you are faced with potential duplicates, but only want to store a
    single instance of that value. Any duplicates are ignored.
*/
//creating a set
var set = new Set();//S capital
//adding is similar as adding element to an array 
set.add("Twitter");
set.add("Facebook");
set.add("LinkedIn");
set.add("Facebook");
console.log(set);
// {"Facebook", "Twitter", "LinkedIn"} facebook was added twise but Ii dident displaay because it was 
//already there no duplicates thats what sets is
//size
/*
    Sets give you a very straight-forward way to get back the size of your set. Simply use the size
    property.
*/
console.log(set.size);
//has
/*
    When you want to check if a set contains an element, call the has method on it.
    return bool type
*/
console.log(set.has("Facebook"));
console.log(set.has("Instagram"));
// Delete
set.delete("Facebook");
//Clear
/*
    To wipe a set clean of all of its elements, call the clear method on it. It resets a set as if
    you had just created a new one.
*/
set.clear(); //RIP elements
/*===========================================MAPS===================================================*/
/*
Maps in JavaScript are an object type that allow you to store collections in key-value pairs.
You can think of how a dictionary works in the sense that if you want to know the definition of a 
word (the value), you only need to locate the word itself (the key).
*/
// creating
var map = new Map();
//seting value
map.set("red", "apple");
map.set("blue", "blueberry");
map.set("green", "pear");

console.log(map);
// get
/*
    After you have populated a map with some elements, you can get them back by using the get method 
    and pass in the key.
*/
var item = map.get("blue");
console.log(item);
//size
console.log(map.size);
//has
/*
    Instead of getting an element then checking if it is null or even exists, you can use the has
    method to check if a map has a key and it returns true if it exists and  false if not.
*/
console.log(map.has("red"));
console.log(map.has("yellow"));
// delete
map.delete("blue");
console.log(map);
// clear 
// to empty the map
map.clear();
console.log(map);
/*====================================TIMEOUT && TIME INTERVAL=====================================*/
//set time out
/*
    A timeout lets you run a function after a certain amount of time has elapsed. This is done with
    the setTimeout function that takes as its parameters the function to run and in how much time
    into the future (in milliseconds).
*/
function hello(){
    console.log("hello from set time out");
}
var timeOut = setTimeout(hello, 5*1000);
//clear timeout
clearTimeout(timeOut);
//Set Interval 
/*
    Intervals are a simpler way of making code repeat over and over again, with a set amount of time
    in between, the interval time. You can think of intervals as basically timeouts that call themselves
    at the end to continue the cycle.
*/
var seconds = 0;
function printTime(){
    seconds++;
    console.log("Seconds elapsed: " + seconds);
}
// var inteval = setInterval(printTime, 1000);
//increased the value of second every second and means function will run ewvery second
//clear interval
/*
    As with clearTimeout, clearInterval is a way you can clear your intervals and prevent it from
    continuing on forever. Sticking with our timer example, let's say you wanted to stop repeating
    once you hit 10 seconds.
*/
function printTimeUntil10() {
    seconds++; // increment seconds by 1
    console.log("Seconds elapsed: " + seconds);

    if (seconds === 10) {
        console.log("10 seconds has elapsed!")
        clearInterval(interval); // we're done, clear it!
    }
}

var interval = setInterval(printTimeUntil10, 1000);
/*========================================WORKING WITH DATE========================================*/
//creating a date
var date = new Date();
console.log(date);
//datestring
/*
    If you pass in a string, or a Datestring, it will be parsed with the Date.parse() method to give 
    you back the Date object.
*/
date = new Date("March 4, 2017");
console.log(date);
//unix time
/*
    In the field of computer science, there is a concept of Unix time. This abitrarily decided moment
    in time is set to midnight on January 1st, 1970.
    With that frame of reference in mind, if you pass in a number to a Date object, that number 
    represents the number of milliseconds that have elapsed since then.
    Here is one trillion milliseconds since then:
*/
date = new Date(1000000000000);
console.log(date);
//multiple parameter
/*
    Another way of creating new Date objects is by passing in 7 numbers. These numbers represent, in
    order, the year, month, day, hour, minute, second, and millisecond. The last 4 parameters are
    optional.
*/
date = new Date(2000, 5, 8, 12, 0, 0, 0);
console.log(date);

//Manipulating dates
/*
    getDate(): Returns the day in the month
    getDay(): Returns the day in the week
    getMonth(): Returns the month
    getFullYear(): Returns the year
    getHours(): Returns the hour
    getMinutes(): Returns the minutes
    getSeconds(): Returns the seconds
    getMilliseconds(): Returns the millseconds
    getTime(): Returns the milliseconds elapsed since Unix time
*/
date = new Date();
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());
/*
    Setters
    Here are all the methods for setting information in your Date object:
    setDate();// Sets the day in the month
    setMonth(); //Sets the month
    setFullYear();// Sets the year
    setHours(); //Sets the hour
    setMinutes(); //Sets the minutes
    setSeconds(); //Sets the seconds
    setMilliseconds(); //Sets the millseconds
    setTime(); //Sets the milliseconds elapsed since Unix time
*/