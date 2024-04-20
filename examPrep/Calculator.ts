function calculator(num1: number, operator: string, num2: number): number {
  let result: number = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  }else if (operator === "/"){
    result = num1 / num2;
  }else if (operator === "*"){
    result = num1 * num2;
  }
  return result;
}
const number: number = 5;
const secondNumber: number = 10;
const operator: string = "+";

const finalResult: number =calculator(number, operator, secondNumber);

console.log(finalResult);
