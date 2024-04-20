function calculator(num1, operator, num2) {
    var result = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    return result;
}
var number = 5;
var secondNumber = 10;
var operator = "+";
var finalResult = calculator(number, operator, secondNumber);
console.log(finalResult);
