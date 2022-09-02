const resultScreen = document.querySelector(".resultScreen");
const bottomScreen = document.querySelector(".bottomScreen");
const allNums = document.querySelectorAll(".nums");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".oprator");
const backspace = document.querySelector(".backspace");
const btns = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");

let chosenOperator = null;
let firstOperand = "";
let secondOperand = "";



const add = function (x, y) {
    return x + y
};
const subtract = function (x, y) {
    return x - y
};
const multiply = function (x, y) {
    return x * y
};
const divide = function (x, y) {
    return x / y
};

const operate = function (operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "%":
            return divide(num1, num2);
    }
}
function reset() {
    chosenOperator = null;
    firstOperand = ""
    secondOperand = ""
    bottomScreen.innerText = ""
    resultScreen.innerText = ""
}

clear.addEventListener("click", reset);

backspace.addEventListener("click", () => {
    let str = bottomScreen.innerText;
    let newStr = str.slice(0, -1)
    bottomScreen.innerText = ''
    bottomScreen.append(newStr)

})
allNums.forEach(num => num.addEventListener("click", (evt) => {
    const btnValue = evt.target.value = evt.target.innerText;
    bottomScreen.append(btnValue);
}))

operators.forEach(operator => operator.addEventListener("click", (evt) => {
    const btnValue = evt.target.value = evt.target.innerText;
    const bottomScreenValue = bottomScreen.innerText;
    chosenOperator = btnValue;
    resultScreen.append(`${bottomScreenValue} ${chosenOperator}`)
    firstOperand = bottomScreenValue
    bottomScreen.innerText = "";
}))

equals.addEventListener("click", () => {
    secondOperand = bottomScreen.innerText;
    resultScreen.innerText = ""
    resultScreen.append(`${firstOperand} ${chosenOperator} ${secondOperand}`);
    const result = operate(chosenOperator, firstOperand, secondOperand)
    bottomScreen.innerText = ""
    bottomScreen.append(result)
    console.log(result)
})