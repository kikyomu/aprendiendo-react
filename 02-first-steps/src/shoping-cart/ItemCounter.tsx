// 1- Importaciones de React
import { useState } from "react";
// 2- Importaciones de terceros

// 3- Nuestras importaciones

// 4 Importaciones de CSS
import './ItemCounter.css';
import styles from'./ItemCounter.module.css';

interface Props {
    name: string;
    quantity?: number;
};

const ItemCounter = ({ name, quantity = 1 }: Props) => {

    //Los Hooks siempre van acá arriba
    const [count, setCount] = useState(quantity);


    const handleAdd = () => {
        setCount(count + 1);
    };

    const handSubtract = () => {
        if (count === 0) return;

        setCount(count - 1);
    };

    return (
        <section 
        className="item-row"
        // style={{
        // display: 'flex',
        // alignItems: 'center',
        // gap: 10,
        // marginTop: 10,
        // }}
        >
            <span className="item-text"
            style={{
                color: count === 1  ? 'red' : 'black',
                }}
            >{name}
            </span>
            <button className={ styles['redButton'] }
                onClick={handSubtract}
            >-1</button>
            <span>{count}</span>
            <button className={ styles.greenButton }
            onClick={handleAdd}
            >+1</button>
        </section >
    )
}

export default ItemCounter
