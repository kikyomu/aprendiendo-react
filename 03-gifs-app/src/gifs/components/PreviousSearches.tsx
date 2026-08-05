import type { FC } from "react";

interface Props {
    subtitle: string;
    searches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ subtitle, searches, onLabelClicked }: Props) => {
    return (
        <>
            <div className="previous-searched content-center">
                <h2>{subtitle}</h2>
                <ul className="previous-searches-list">
                    {searches.map((term) => (
                        <li key={term}
                            onClick={() => onLabelClicked(term)}
                        >{term}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};