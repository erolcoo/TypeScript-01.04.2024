function createTownObjects(input) {
    const townObjects = [];

    input.forEach(row => {
        const [town, latitude, longitude] = row.split(' | ');
        townObjects.push({
            town: town.trim(),
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        });
    });

    return townObjects;
}

const input1 = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];

const output1 = createTownObjects(input1);
output1.forEach(obj => console.log(obj));

const input2 = ['Plovdiv | 136.45 | 812.575'];
const output2 = createTownObjects(input2);
output2.forEach(obj => console.log(obj));
