function evenPosition(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(' ');
}
var array = ['20', '30', '40', '50', '60'];
var printArr = evenPosition(array);
console.log(printArr);
