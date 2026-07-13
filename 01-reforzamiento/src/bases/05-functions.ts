function greet(name: string): string {
    return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

const message = greet('Gisella');
const message2 = greet2('Eduviges');


console.log({ message });
console.log({ message2 });

// La idea de la interface es definir como luce el objeto
interface user {
    uid: string;
    username: string;
}

function getUser(): user {
    return {
        uid: '1',
        username: 'John_doe',
    };
};

// estoy retornando un objeto
const getUser2 = () => ({
    uid: '2',
    username: 'Peter_doe',
});

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//     console.log({ value });
// }); //conocida como funcion callback, conocida como funcion anonima que usualmente se pasa como un argumento a un método. En este caso a "forEach"

// myNumbers.forEach((value) => {
//     console.log({ value });
// });
myNumbers.forEach(console.log);
