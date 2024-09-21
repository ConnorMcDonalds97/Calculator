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

// Adding digit buttons to the numberButtons div
for (let i = 0; i<10; i++){ 
    let digitButton = document.createElement("button")
    digitButton.textContent = i
    digitButton.setAttribute("style","cursor: pointer")
    numberButtons.appendChild(digitButton)
}

// Adding operation buttons to the operationButtons div
let operations = ["+","-","x","/"]
for (let i = 0; i < operations.length; i++){
    let opButton = document.createElement("button")
    opButton.textContent = operations[i]
    opButton.setAttribute("style",`cursor: pointer, class: ${operations[i]}`)
    operationButtons.appendChild(opButton)
}

// Now setting listnerEvents for their functions
const plus = document.querySelector(".+")
plus.addEventListener("click", function(){
    let result = add(num1,num2)
})

let equals = document.createElement("button")
equals.textContent = "="
equals.setAttribute("style","cursor: pointer")
miscButtons.appendChild(equals)

let clear = document.createElement("button")
clear.textContent = "clear"
clear.setAttribute("style","cursor: pointer")
miscButtons.appendChild(clear)


