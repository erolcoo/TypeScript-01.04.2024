interface TownObject {
    town: string;
    latitude: string;
    longitude: string;
}

function createTownObjects(input: string[]): TownObject[] {
    const townObjects: TownObject[] = [];

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

const input1: string[] = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];

const output1: TownObject[] = createTownObjects(input1);
output1.forEach(obj => console.log(obj));

const input2: string[] = ['Plovdiv | 136.45 | 812.575'];
const output2: TownObject[] = createTownObjects(input2);
output2.forEach(obj => console.log(obj));
