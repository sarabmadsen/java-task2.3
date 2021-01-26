//Question 1

const btn = document.querySelector(".btn");

function functionBtn () {
    console.log("I'm a button");
};

btn.addEventListener("click", functionBtn);


//Question 2

const button2 = document.querySelector("form button");
const countOutput = document.querySelector("b.count");
const input = document.querySelector("input");

function functionB2 () {
    const characterCount = input.value.trim().length;
    countOutput.innerHTML = characterCount;
};

button2.addEventListener("click", functionB2);


