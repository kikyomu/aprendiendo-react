
// lAs interfaces son una forma de definir la estructura de un objeto,
// es decir, qué propiedades y métodos debe tener un objeto. 
// Son muy útiles para definir contratos en nuestro código 
// y asegurarnos de que los objetos cumplan con ciertas reglas.
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    // Se le agrega "?" para indicar que la propiedad es opcional,
    // es decir, que puede o no estar presente en el objeto.
    //Pero no es una buena práctica porque no escala muy bien
    // address?: {
    //     postalCode: string;
    //     city: string;
    // };

    // Una solucion más escalable es crear otra interface para la propiedad address
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
}

console.log(ironman);

// operador "spread" para tomar las propiedades hijas directas de un objeto y copiarlas en otro objeto
// const spiderman = { ...ironman }; // {...nombreObjeto} -> operador spread

// Con structuredClone() se hace una copia profunda del objeto, incluyendo todas las propiedades anidadas.

// const spiderman = structuredClone(ironman);
// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.postalCode = '54321';

// console.log(ironman, spiderman);