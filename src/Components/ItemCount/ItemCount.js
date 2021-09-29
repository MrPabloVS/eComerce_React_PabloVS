import {ButtonGroup, Button} from 'react-bootstrap';
import React, {useState} from 'react';

function ItemCount({stockProp}) {

    const [stock, setstock] = useState(7)
    const [addNumber, setAddNumber] = useState(1)


    return(
        <>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={addNumber>=1 ? setAddNumber(addNumber--):console.log("no se pueden sumar negativos")}>-</Button>
            <Button variant="secondary"> {addNumber} </Button>
            <Button variant="primary" onClick={addNumber<stock ? setAddNumber(addNumber++):console.log("Limite de Stock")}>+</Button>
        </ButtonGroup> <br />
        <Button variant="outline-success">Agregar al Carrito</Button>
        </>
    );
}

export default ItemCount