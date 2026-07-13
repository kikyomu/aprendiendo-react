// La desestructuración de un objeto es 
// Desarmar un objeto y extraer sus properties
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

// Desestructurar = abrir "la caja" objeto y sacar los datos como variables sueltas
// Acá saco "key" y "age" tal cual, pero a "name" lo saco con OTRO nombre: "ironmanName"
// (esto se hace poniendo   nombreOriginal: nombreNuevo)
const { key, name: ironmanName, age } = person;

// Sin desestructurar, hubiera quedado mucho más largo el código:
// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ ironmanName, age, key });

// "todo lo que sea de tipo Hero, tiene que tener estas propiedades"
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

// En vez de recibir el objeto entero y después escribir "hero.name", "hero.age", etc,
// lo desestructuro directo en los parámetros de la función.
// Además, si "rank" no viene, le pongo un valor por defecto: 'Sin rango'
const useContex = ({ key, name, age, rank = 'Sin rango' }: Hero) => {
    // Devuelvo un objeto NUEVO, armado con esos datos, pero con otra forma:
    return {
        keyName: key,   // renombro "key" a "keyName"
        user: {         // agrupo "name" y "age" adentro de un sub-objeto llamado "user"
            name,
            age,
        },
        rank: rank,
    };
};

const { rank,
    keyName,
    user,
    // user: { name },
} = useContex(person);
const { name } = user;

console.log({ rank, keyName, name });
