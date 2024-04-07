function biggerHalf(arr) {
    arr.sort(function (a, b) { return a - b; });
    var halfLength = Math.ceil(arr.length / 2);
    var result = arr.slice(-halfLength);
    return result;
}
var input1 = [4, 7, 2, 5];
console.log(biggerHalf(input1));
var input2 = [3, 19, 14, 7, 2, 19, 6];
console.log(biggerHalf(input2));
