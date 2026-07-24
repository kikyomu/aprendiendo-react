import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
};

const ItemCounter = ({ name, quantity = 1 }: Props) => {

    //Los Hooks siempre van acá arriba
    const [ count, setCount ] = useState(quantity);


    const handleAdd = () => {
        setCount(count+1);
    }; 

    const handSubtract = () => {
        if (count === 0) return;

        setCount(count-1);
    };

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}
        >
            <span style={{
                width: 150,
            }}
            >{name}
            </span>
            <button
                onClick={handSubtract}
            >-1</button>
            <span>{count}</span>
            <button
            onClick={handleAdd}
            >+1</button>
        </section>
    )
}

export default ItemCounter
