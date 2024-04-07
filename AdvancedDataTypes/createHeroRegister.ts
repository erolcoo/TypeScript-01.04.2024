interface Hero {
    name: string;
    level: number;
    items: string[];
}

function createHeroRegister(data: string[]): void {
    const heroes: Hero[] = [];

    for (const entry of data) {
        const [name, levelStr, itemsStr] = entry.split(' / ');
        const level: number = parseInt(levelStr);
        const items: string[] = itemsStr ? itemsStr.split(', ') : [];

        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(', ')}`);
    }
}

const input1: string[] = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

createHeroRegister(input1);

const input2: string[] = [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
];

createHeroRegister(input2);
