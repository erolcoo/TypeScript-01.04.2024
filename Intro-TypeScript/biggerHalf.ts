function biggerHalf(arr: number[]): number[] {
    arr.sort((a, b) => a - b);

    const halfLength = Math.ceil(arr.length / 2);

    const result = arr.slice(-halfLength);

    return result;
}

const input1: number[] = [4, 7, 2, 5];
console.log(biggerHalf(input1));

const input2: number[] = [3, 19, 14, 7, 2, 19, 6];
console.log(biggerHalf(input2));
