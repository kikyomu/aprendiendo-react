const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// En los arreglos/array importa el orden para desestructurar
const [, , p3] = characterNames;

console.log({ p3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const; // "as const" es para definir que siempre va a regresar primero un string y luego un number
};

const [letras, numeros] = returnsArrayFn();

console.log(letras, numeros);

//TAREA



const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log(newValue);
        },
    ] as const; // "as const" es para definir que siempre va a regresar primero un string y luego un number
};

const [name, setName] = useState('Goku'); // useState es conocido como un Hook

console.log(name);  // Goku
setName('Vegeta');  // Imprime "Vegeta"