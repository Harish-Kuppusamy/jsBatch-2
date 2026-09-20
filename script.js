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
const reesult = (age >= 18 && age <= 25) ? "18 - 25" : (age > 25) ? ">25" : "<18"
console.log(reesult);


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


// arrow functions


const abc = (a, ...b) => {
    console.log(a, b);
    return true
}

const a = abc("hello", 20, 30, 40, 50, 60, 70)


// rest op

let [a, ba, ...c] = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(a, ba, c);


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArray = []

for (let index = 0; index <= a.length - 1; index++) {
    const el = a[index] * 3
    console.log(el);
}

// map

const reeesult = a.map(harish => harish * 3)

console.log(reeesult);


const result = a.filter(num => num % 2 == 0)

console.log(result);

function abc() {
    if (true) {
        var first = "first"
        let second = "second"
        const third = "third"
        console.log(second);
        console.log(third);
    }
    console.log(first);
}

abc()


// primitive string num, boolean

// non [primitive ] array , obj, func

let a = 30
let b = a
console.log(b);

b = 100

console.log(a);
console.log(b);

let first = [1, 2, 3]
let second = first
console.log(second);
second.push(60)
console.log(first);
console.log(second);






