import { heroes, Owner, type Hero } from "./data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`);
    // }
    return hero;
};

// console.log(getHeroById(3));

// TAREA
// getHeroesByOwner => Hero[]
// Filtra héroes por su propietario
// @param Ownwe - El propietario por el cual filtrar(DC o Marvel)
// @returns Array de héroes pertenecientes al propietario
// console.log(getHeroesByOwner(Owner.DC)); // en main.ts con import

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter((hero) => {
        return hero.owner === owner;
    });
    return heroesByOwner;
};