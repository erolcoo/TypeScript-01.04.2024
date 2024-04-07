function aggregateElements(arr) {
    // Sum(ai)
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);

    // Sum(1/ai)
    const inverseSum = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(inverseSum);

    // Concat(ai)
    const concatString = arr.join('');
    console.log(concatString);
}

const input1 = [1, 2, 3];
aggregateElements(input1);
