function aggregateElements(arr: number[]): void {
    // Sum(ai)
    const sum: number = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);

    // Sum(1/ai)
    const inverseSum: number = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(inverseSum);

    // Concat(ai)
    const concatString: string = arr.join('');
    console.log(concatString);
}

const input1: number[] = [1, 2, 3];
aggregateElements(input1);
