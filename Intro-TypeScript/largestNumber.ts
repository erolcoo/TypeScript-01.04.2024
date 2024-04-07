function largestNumber (num1 : number, num2 : number,num3 : number): number{
    return Math.max(num1,num2,num3);
}

const num1 = 5;
const num2 = -3;
const num3 = 16;
const largest = largestNumber(num1, num2, num3);
console.log(`The largest number is ${largest}.`);
