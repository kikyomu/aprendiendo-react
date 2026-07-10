const firstName: string = 'Gisella';
const lastName = 'Franco';

let diceNumber = 5;
diceNumber = 3; // This line will cause an error because diceNumber is declared as a constant and cannot be reassigned.

const containsLetterF = lastName.includes('F');

console.log({ containsLetterF, diceNumber, firstName, lastName });

console.log('firstName', firstName);