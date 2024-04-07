function createHeroRegister(data) {
    const heroes = [];
    
    for (const entry of data) {
        const [name, level, itemsString] = entry.split(' / ');
        const items = itemsString ? itemsString.split(', ') : [];
        
        heroes.push({
            name: name,
            level: Number(level),
            items: items
        });
    }
    
    heroes.sort((a, b) => a.level - b.level);
    
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(', ')}`);
    }
}

const input1 = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

createHeroRegister(input1);

const input2 = [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
];

createHeroRegister(input2);
