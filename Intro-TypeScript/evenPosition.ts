function evenPosition(arr: string[]): string {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) { 
            newArr.push(arr[i]);
        }
    }
    return newArr.join(' ');
}

const array = ['20', '30', '40', '50', '60'];
const printArr = evenPosition(array);
console.log(printArr);
