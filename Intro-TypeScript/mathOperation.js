function mathOperation(num1, num2, operator) {
    var sum = 0;
    if (operator == "+") {
        sum = num1 + num2;
    }
    else if (operator == "-") {
        sum = num1 - num2;
    }
    else if (operator == "*") {
        sum = num1 * num2;
    }
    else if (operator == "/") {
        sum = num1 / num2;
    }
    else if (operator == "%") {
        sum = num1 % num2;
    }
    else if (operator == "**") {
        sum = Math.pow(num1, num2);
    }
    return sum;
}
var number1 = 5;
var number2 = 6;
var operatorr = "+"; // specify the operator as a string
var ress = mathOperation(number1, number2, operatorr);
console.log(ress); // Output will be 11
