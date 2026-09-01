//output log
console.log("from external js file");


// variables
console.log(a);

var a = "hello"
console.log(a);


let Name = "harish"
Name = "emc"

const year = 2004
year = 2005


const a = null;
console.log(year);


// data types

// string , numbers , boolean , undefined, null



let nname = "harish"
let totalFees = 20000
let alreadyPaid = 10000
let hasAccess = true


// operators

let remainingFees = totalFees - alreadyPaid

// conditional statements
let Age = 16

if (age >= 18 && age <= 25) {
    console.log("18 - 25");

} else if (age > 25) {
    console.log(">25");

} else {
    console.log("<18");

}


//ternary 
const result = (age >= 18 && age <= 25) ? "18 - 25" : (age > 25) ? ">25" : "<18"
console.log(result);


// pre inc  & post inc 
var Numberr = 10
console.log(Numberr++);

console.log(Numberr);

// &&  ||  !


let Numberr = 10

while (Numberr > 5) {
    console.log("harish");
    Numberr--

}

//template literals

var name = "harish"
console.log("hello welcome" + name + " how are you ?");

console.log(`hello welcome ${name} how are you ?`);

//arrays 
const arr = [10, "harish", true, 10, 320, 30, 40, 50]

//accessing value
console.log(arr[1]);

// add , remove
arr.push("hello")
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(20)
console.log(arr);

arr.shift()
console.log(arr);



// slice vs splice

console.log(arr.slice(1, 5));

const Newarr = arr.slice(1, 5)
console.log(arr);
console.log(Newarr);

//splice
const newarr = arr.splice(1, 3, 1000)
console.log(newarr);
console.log(arr);

// spread operator

const One = [1, 2, 3, 4, 5, 5, 55, 66]
const Two = [6, 7, 8, 9, 10]
const Three = [...One, ...Two]

console.log(One);
console.log(three);


// destructuring

const [z, two, x, four, y] = [1, 2, 3, 4, 5, 6]

const five = arr[4]
const one = arr[0]
const Twwo = arr[1]
const three = arr[2]

console.log(z, twwo, x, four, y);


// objects

const hname = "harish"
const hage = 23
const hhasAcces = true

//object destructuring
const { name, age, hasAcces, colors } = {

    name: "harish",
    age: 22,
    hasAcces: true,
    colors: [1, 2, 3,]

}


//CRUD operations in obj
console.log(harish.name);
console.log(harish['colors']);

harish.abc = "hello"
console.log(harish);

delete harish.abc

console.log(harish);

console.log(name, age, hasAcces, colors);


const name = harish.name


//functions
function logger(a = 100) {
    console.log("one");
    console.log("two");
    console.log("three");
    console.log(a);


    return "welcome"
}

const msg = logger(10)
console.log(msg);
console.log(logger());



