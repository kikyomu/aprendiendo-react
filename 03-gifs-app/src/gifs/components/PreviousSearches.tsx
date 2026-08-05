interface Props {
    subtitle: string;
    tags: string;
}

export const PreviousSearches = ({ subtitle, tags }: Props) => {
    return (
        <>
            <div className="previous-searched content-center">
                <h2>{subtitle}</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Gohan</li>
                    <li>Naruto</li>
                </ul>
            </div>
        </>
    );
};