function printEmployees(employees) {
    for (const employee of employees) {
        const personalNumber = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNumber}`);
    }
}

const employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

printEmployees(employees);
