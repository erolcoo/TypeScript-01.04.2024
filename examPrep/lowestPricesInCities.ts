function lowestPricesInCities(input: string[]): void {
    const productsMap: Map<string, { price: number, town: string }> = new Map();

    input.forEach(entry => {
        const [town, product, priceStr] = entry.split(' | ');
        const price = parseFloat(priceStr);

        if (!productsMap.has(product) || productsMap.get(product).price > price) {
            productsMap.set(product, { price, town });
        }
    });

    productsMap.forEach((value, key) => {
        console.log(`${key} -> ${value.price} (${value.town})`);
    });
}

// Example usage:
const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];
lowestPricesInCities(input);
