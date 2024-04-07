function sumOfNumbers(number1: number, number2: number): number {
    let sum = 0; 

    for (let i = number1; i <= number2; i++) {
        sum += i; 
    }
    return sum; 
}
const result = sumOfNumbers(-8, 20);
console.log(result); 
