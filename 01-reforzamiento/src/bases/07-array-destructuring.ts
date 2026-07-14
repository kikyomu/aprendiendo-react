const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// En los arreglos/array importa el orden para desestructurar
const [, , p3] = characterNames;

console.log({ p3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const; // "as const" es para definir que siempre va a regresar primero un string y luego un number
};

const [letras, numeros] = returnsArrayFn();

console.log(letras, numeros);