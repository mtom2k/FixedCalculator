let number1 = 8
let number2 = 2
let temp = 0

let num1El = document.getElementById("num1-el").textContent = number1
let num2El = document.getElementById("num2-el").textContent = number2

let sumEl = document.getElementById("sum-el")
let spaceBtwnNums = document.getElementById("spacebtwnnums-el")


function add() {
    temp = number1 + number2
    sumEl.textContent = "Sum: " + temp
    spaceBtwnNums.textContent = "+"
}

function subtract() {
    temp = number1 - number2
    sumEl.textContent = "Sum: " + temp
    spaceBtwnNums.textContent = "-"
}

function multiply() {
    temp = number1 * number2
    sumEl.textContent = "Sum: " + temp
    spaceBtwnNums.textContent = "*"
}

function divide() {
    temp = number1 / number2
    sumEl.textContent = "Sum: " + temp
    spaceBtwnNums.textContent = "/"
}