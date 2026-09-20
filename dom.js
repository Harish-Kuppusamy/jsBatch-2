const el = window.document.documentElement.children[1].children[0]

console.log(el);



// html manipulate

console.log(el.textContent);
console.log(el.innerHTML);
console.log(el.innerText);


el.innerHTML = "<h4>hello i am h4</h4>"
el.textContent = "<h4>hello i am h4</h4>"


// creating html elements

const divElement = window.document.createElement("div")
console.log(divElement);

divElement.textContent = " i am div"

console.log(divElement);

const bodyEl = window.document.body
console.log(bodyEl);



bodyEl.prepend(divElement)

el.before(divElement)


// updating the css


console.log(el.style);

el.style.backgroundColor = " orange"
el.style.color = "black"
el.style.fontSize = " 50px"



// attributes


el.setAttribute("id", "first")
el.removeAttribute("class")
console.log(el.hasAttribute("class"));

console.log(el.attributes);



// class List
el.classList.add("five")
el.classList.remove("one")
el.classList.toggle("one")
el.classList.toggle("one")
console.log(el.classList);



// events


function printLog(event) {

    console.log("user is typing in the input box");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
}

// event handlers

function handleClick() {
    console.log("buttton dblclicked");
}

const bttn = window.document.getElementById("btn")

bttn.addEventListener("dblclick", handleClick)

const ul = document.createElement("ul")
document.body.append(ul)
const handleClick = () => {

    const radioObj = window.document.querySelectorAll("input[name='gender']:checked")
    console.log(radioObj[0].value);
    const checkBoxList = window.document.querySelectorAll("input[name='course']:checked")
    for (let obj of checkBoxList) {
        console.log(obj.value);
        const li = document.createElement("li")
        li.textContent = obj.value
        ul.append(li)

    }



}

const btn = document.getElementById("btn")

btn.addEventListener("click", handleClick)



// this keyword


const abc = {


    name: "xyz",
    age: 99,
    hello: function () {
        console.log(this);
        return true
    }
}


const aa = abc.hello()
console.log(aa);




//objects
const sstudent1 = {

    name: "deva",
    age: 21
}

const sstudent2 = {

    name: "xyx",
    age: 50

}


class Students {

    constructor(a, b) {
        this.name = a;
        this.age = b
    }

    hello() {
        console.log("hello ");

    }


}

const student1 = new Students("deva", 21)
const student2 = new Students("dani", 27)
const student3 = new Students("xyz", 28)

console.log(student1);
console.log(student2);
console.log(student3);



// callback functions



function generateUser(a) {

    //2.5 s
    const user = { name: "xyz", age: 35 }
    a(user)

}


function printUser(obj) {
    console.log("hello from printUser");
    console.log(obj.age);
    console.log(obj.name);

}

generateUser(printUser)


synchronous & asynchronous



console.log("one");

setTimeout(() => {
    console.log("set interval triggered ");

}, 6000)

setInterval(() => {
    console.log("hello");

}, 3000)

console.log(a);


console.log("two");
console.log("three");






// FETCH - API CALLS



console.log("started");

const getAmount = new Promise((resolve, reject) => {


    setInterval(() => {
        const balanceAmount = 7000
        const userEnteredAmount = 5000

        if (userEnteredAmount <= balanceAmount) {

            resolve(" transaction success please collect u r cash")

        } else {

            reject(" unable to receive money ")
        }

    }, 5000)



})


getAmount.then((message) => {
    console.log(`this is the message from the promise ${message}`);


}).catch((error) => {
    console.log(`something went wrong ${error}`);


}).finally(() => {
    console.log("i am finally");


})


console.log("ended");


// fetch

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/us")

fetchUsers.then((msg) => {
    const response = msg.body
    return response.json()



}).then((a) => {
    console.log(a);

})

// JSON

const aaa = {
    fullName: "harish",
    age: 25
}
console.log(aaa);
console.log(aaa.fullName);



const bb = JSON.stringify(aaa)

console.log(bb);
console.log(bb.fullName);



const c = JSON.parse(bb)
console.log(c);
console.log(c.fullName);


// local storage   ======


console.log(localStorage);


localStorage.setItem("name", "harish")

localStorage.setItem("age", 25)

const name = localStorage.getItem("name")

localStorage.setItem("name", "xyz")
localStorage.setItem("name", "abcd")

localStorage.removeItem("name")

localStorage.clear()


const a = {

    name: "abcd",
    age: 35
}

const b = ["one", "two", "three"]

localStorage.setItem("c", JSON.stringify(a))
localStorage.setItem("d", b)
localStorage.setItem("num", 35)

const localC = localStorage.getItem("c")
const x = JSON.parse(localC)
const z = localStorage.getItem("num")
console.log(localC);
console.log(localC.name);
console.log(x);
console.log(x.name);



console.log(typeof localC);
console.log(z);
console.log(typeof z);

fetch

fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {

    if (!res.ok) {

        throw new Error("something went wrong")
    }

    return res.json()




}).then((data) => {
    console.log(data);

}).catch((err) => {
    console.log("error :", err);

})


//async await   
async function fetchUser() {

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(res);

        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error
        );
    }
}
fetchUser()