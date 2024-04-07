function createTownRegistry(input: string[]): { [key: string]: number } {
    const townRegistry: { [key: string]: number } = {};

    input.forEach(entry => {
        const [town, populationStr] = entry.split(' <-> ');
        const population: number = Number(populationStr);
        
        if (townRegistry.hasOwnProperty(town)) {
            townRegistry[town] += population;
        } else {
            townRegistry[town] = population;
        }
    });

    return townRegistry;
}

const input1: string[] = [
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
];

const output1: { [key: string]: number } = createTownRegistry(input1);
for (const town in output1) {
    console.log(`${town} : ${output1[town]}`);
}

const input2: string[] = [
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
];

const output2: { [key: string]: number } = createTownRegistry(input2);
for (const town in output2) {
    console.log(`${town} : ${output2[town]}`);
}
