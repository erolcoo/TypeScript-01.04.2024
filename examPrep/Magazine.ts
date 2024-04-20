import { Cloth } from "./Cloth";

export class Magazine {
    type: string;
    capacity: number;
    clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex(cloth => cloth.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }

    getSmallestCloth(): Cloth | undefined {
        return this.clothes.reduce((minCloth, cloth) => minCloth.size < cloth.size ? minCloth : cloth, this.clothes[0]);
    }

    getCloth(color: string): Cloth | undefined {
        return this.clothes.find(cloth => cloth.color === color);
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        const sortedClothes = this.clothes.slice().sort((a, b) => a.size - b.size);
        const clothesInfo = sortedClothes.map(cloth => cloth.toString()).join(' ');
        return `${this.type} magazine contains: ${clothesInfo}`;
    }
}
