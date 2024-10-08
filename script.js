//
// Kevin Cao
// Sept 20, 2024
// Calculator Project
function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    if (num2 == 0){
        return 'ERROR'
    }
    else{
        return num1/num2
    }
}

var operation  = "" // operation will be a string that will be processed later into its individual operands and operator
var num1
var operator
var num2

function operate(num1,operator,num2){
    if (operator == '+'){
        return add(num1,num2)
    }
    else if (operator == '-'){
        return subtract(num1,num2)
    }
    else if (operator == '*'){
        return multiply(num1,num2)
    }
    else{
        return divide(num1,num2)
    }
}

const body = document.querySelector("body")

const numberButtons = document.createElement("div")
numberButtons.classList.add("numbers")
body.appendChild(numberButtons)

const operationButtons = document.createElement("div")
operationButtons.classList.add("operations")
body.appendChild(operationButtons)

const miscButtons = document.createElement("div") // miscellaneous buttons such as "=" or clear
miscButtons.classList.add("misc")
body.appendChild(miscButtons)

const display = document.createElement("div")
display.classList.add("display")
body.appendChild(display)


// Adding digit buttons to the numberButtons div
for (let i = 0; i<10; i++){ 
    let digitButton = document.createElement("button")
    digitButton.textContent = i
    digitButton.setAttribute("style","cursor: pointer")
    digitButton.setAttribute("id",i)
    digitButton.addEventListener("click", function(){
        operation += digitButton.textContent
    })
    numberButtons.appendChild(digitButton)
}

// Adding operation buttons to the operationButtons div
let operations = ["+","-","x","/"]
for (let i = 0; i < operations.length; i++){
    let opButton = document.createElement("button")
    opButton.textContent = operations[i]
    opButton.setAttribute("style","cursor: pointer")
    opButton.setAttribute("id", operations[i])
    operationButtons.appendChild(opButton)
}

// Creating equals and clear button
let equals = document.createElement("button")
equals.textContent = "="
equals.setAttribute("style","cursor: pointer")
miscButtons.appendChild(equals)

let clear = document.createElement("button")
clear.textContent = "clear"
clear.setAttribute("style","cursor: pointer")
miscButtons.appendChild(clear)


// Now setting listenerEvents for their functions
const plus = document.getElementById("+")
plus.addEventListener("click", function(){
    operation += plus.textContent
    display.textContent = operation
})

const minus = document.getElementById("-")
minus.addEventListener("click", function(){
    operation += minus.textContent
    display.textContent = operation
})

const mult = document.getElementById("x")
mult.addEventListener("click", function(){
    operation += mult.textContent
    display.textContent = operation
})

const divi = document.getElementById("/")
divi.addEventListener("click", function(){
    operation += divi.textContent
    display.textContent = operation
})

const number0 = document.getElementById("0")
number0.addEventListener("click", function(){
    operation += number0.textContent
    display.textContent = operation
})

//FIX THE NUMBER BUTTONS

/*let numberChildren = numberButtons.childNodes;

numberChildren.forEach(element => {
    element.addEventListener("click", function(){
        operation += element.textContent
        display.textContent = operation
    })
})
for (let i = 0; i < 10; i++){
    let tempButton = document.getElementById(`${i}`)
    tempButton.addEventListener("click", function(){
        operation += tempButton.textContent
        display.textContent = operation
    })
}*/


