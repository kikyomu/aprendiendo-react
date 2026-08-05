interface Props {
    placeholder?: string;
    butonText: string;
}

export const SearchBar = ( { placeholder = 'Buscar', butonText }: Props ) => {
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder={placeholder} />
                <button>{butonText}</button>
            </div>
        </>
    );
};

