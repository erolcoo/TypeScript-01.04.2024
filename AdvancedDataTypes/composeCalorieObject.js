function composeCalorieObject(input) {
    var calorieObj = {};
    for (var i = 0; i < input.length; i += 2) {
        var food = input[i];
        var calories = Number(input[i + 1]);
        calorieObj[food] = calories;
    }
    console.log(calorieObj);
}
// Example usage:
var input1 = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];
composeCalorieObject(input1);
var input2 = ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'];
composeCalorieObject(input2);
