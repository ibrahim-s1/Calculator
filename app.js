const resultScreen = document.querySelector(".resultScreen");
const bottomScreen = document.querySelector(".bottomScreen");
const allNums = document.querySelectorAll(".nums");


// const add = function (...nums) {
//     return total = nums.reduce((num1, num2) => num1 + num2)
// }
// const subtract = function (...nums) {
//     return total = nums.reduce((num1, num2) => num1 - num2)
// }
// const multiply = function (...nums) {
//     return total = nums.reduce((num1, num2) => num1 * num2)
// }
// const divide = function (...nums) {
//     return total = nums.reduce((num1, num2) => num1 / num2)
// }

const add = function (x, y) {
    return x + y
}
const subtract = function (x, y) {
    return x - y
}
const multiply = function (x, y) {
    return x * y
}
const divide = function (x, y) {
    return x / y
}

const operators = function (operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break
    }
}

allNums.forEach(num => num.addEventListener("click", evt => {
    evt.target.value = evt.target.innerText
    console.log(evt.target.value)
}))
