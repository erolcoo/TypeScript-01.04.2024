function printEmployees(employees: string[]): void {
    for (const employee of employees) {
        const personalNumber: number = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNumber}`);
    }
}

const employees: string[] = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

printEmployees(employees);
