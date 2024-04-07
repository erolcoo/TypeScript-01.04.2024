interface ProductInfo {
    price: number;
    town: string;
}

function findLowestPrices(input: string[]): void {
    const products: { [key: string]: ProductInfo } = {};

    input.forEach(entry => {
        const [town, product, priceStr] = entry.split(' | ');
        const price: number = Number(priceStr);

        if (!products.hasOwnProperty(product) || price < products[product].price) {
            products[product] = { price, town };
        }
    });

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

const input: string[] = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

findLowestPrices(input);
