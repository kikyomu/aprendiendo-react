import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" butonText="Buscar" />

            {/* Búsquedas previas */}
            <PreviousSearches subtitle="Búsquedas previas" tags="Buscar" />

            {/* Gifs */}
            <GifList />
            
        </>
    )
}

