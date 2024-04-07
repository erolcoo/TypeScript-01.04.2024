function composeCalorieObject(input: string[]): void {
    const calorieObj: { [key: string]: number } = {};

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i];
        const calories = Number(input[i + 1]);
        calorieObj[food] = calories;
    }

    console.log(calorieObj);
}

// Example usage:
const input1: string[] = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];
composeCalorieObject(input1);

const input2: string[] = ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'];
composeCalorieObject(input2);
