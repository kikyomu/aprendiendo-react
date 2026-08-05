import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { useState } from "react"

export const GifsApp = () => {

    const [previousTerm, setPreviousTerms] = useState(['dragon ball z']);
    const handleTermClicked = (term: string) => {
        console.log({ term });
    }


    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto" />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" butonText="Buscar" />

            {/* Búsquedas previas */}
            <PreviousSearches
                subtitle="Búsquedas previas"
                searches={previousTerm}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifList gifs={mockGifs} />

        </>
    )
}

