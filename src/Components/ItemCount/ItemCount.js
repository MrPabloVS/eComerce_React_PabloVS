import {ButtonGroup, Button} from 'react-bootstrap';
import React, {useState} from 'react';

function ItemCount({stockProp}) {

    const [stock, setstock] = useState(stockProp)
    const [addNumber, setAddNumber] = useState(1)
    function plusNumber() {
        if (addNumber<stock) {
            setAddNumber(addNumber + 1)
        }
    }
    function minusNumber() {
        if (addNumber>=1) {
            setAddNumber(addNumber - 1)
        }
    }

    return(
        <>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={minusNumber()}>-</Button>
            <Button variant="secondary"> {addNumber} </Button>
            <Button variant="primary" onClick={plusNumber()}>+</Button>
        </ButtonGroup> <br />
        <Button variant="outline-success">Agregar al Carrito</Button>
        </>
    );
}

export default ItemCount