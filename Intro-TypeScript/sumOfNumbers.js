function sumOfNumbers(number1, number2) {
    var sum = 0;
    for (var i = number1; i <= number2; i++) {
        sum += i;
    }
    return sum;
}
var result = sumOfNumbers(-8, 20);
console.log(result);
