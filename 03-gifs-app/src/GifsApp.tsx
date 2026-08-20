import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
    
    const handleTermClicked = (term: string) => {
        console.log({ term });
    };

    const handleSearch = async (query: string = '') => {
// Tarea:Implementar la función handleSearch que debe:
// Convertir el query a minúsculas y eliminar espacios en blanco
    query = query.trim().toLowerCase();
// Validar que el query no esté vacío
    if (query.length === 0) return;

// Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    if (previousTerms.includes(query)) return;
// Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
    setPreviousTerms([query, ...previousTerms].splice(0, 8));
    
    const gifs = await getGifsByQuery(query);

    console.log({gifs});
    };

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto" />

            {/* Search */}
            <SearchBar 
                placeholder="Busca lo que quieras" 
                onQuery={handleSearch} 
            />

            {/* Búsquedas previas */}
            <PreviousSearches
                subtitle="Búsquedas previas"
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifList gifs={mockGifs} />

        </>
    )
}

