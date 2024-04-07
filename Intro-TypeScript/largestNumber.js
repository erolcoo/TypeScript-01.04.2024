function largestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
var num1 = 5;
var num2 = -3;
var num3 = 16;
var largest = largestNumber(num1, num2, num3);
console.log("The largest number is ".concat(largest, "."));
