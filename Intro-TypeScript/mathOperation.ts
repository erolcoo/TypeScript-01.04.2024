function mathOperation(num1: number, num2: number, operator: string): number {
  let sum = 0;

  if (operator == "+") {
    sum = num1 + num2;
  } else if (operator == "-") {
    sum = num1 - num2;
  } else if (operator == "*") {
    sum = num1 * num2;
  } else if (operator == "/") {
    sum = num1 / num2;
  } else if (operator == "%") {
    sum = num1 % num2;
  } else if (operator == "**") {
    sum = num1 ** num2;
  }

  return sum;
}

const number1 = 5;
const number2 = 6;
const operatorr = "+"; // specify the operator as a string
const ress = mathOperation(number1, number2, operatorr);
console.log(ress); // Output will be 11
