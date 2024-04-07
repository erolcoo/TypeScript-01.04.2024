function createPerson(firstName: string, lastName: string, age: string): { firstName: string, lastName: string, age: number } {
    return {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age)
    };
}

// Example usage:
const person1 = createPerson("Peter", "Pan", "20");
console.log(person1);

const person2 = createPerson("George", "Smith", "18");
console.log(person2);
