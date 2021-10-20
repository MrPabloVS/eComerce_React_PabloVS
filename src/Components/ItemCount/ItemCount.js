import {ButtonGroup, Button, Row, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import { useContext } from 'react';
import CartContextProvider from '../../Context/CartContext';

function ItemCount({stockProp, totalOnCart, itemId}) {

    const [stock, setstock] = useState(stockProp - totalOnCart)
    const [addNumber, setAddNumber] = useState(1)
    const cartList = useContext(CartContextProvider)
    
    
    
    
    function plusNumber() {
        if (addNumber<stock) {
            setAddNumber(addNumber + 1)
        }
    }
    function minusNumber() {
        if (addNumber>1) {
            setAddNumber(addNumber - 1)
        }
    }

    return(
        <div className="container-fluid">
            <Row>
                <Col>
                    <ButtonGroup aria-label="Basic example" className="align-items-center">
                        <Button variant="primary" onClick={()=>minusNumber()}>-</Button>
                        <Button variant="secondary"> {addNumber} </Button>
                        <Button variant="primary" onClick={()=>plusNumber()}>+</Button>
                    </ButtonGroup> <br />
                </Col>
                <Col>
                    <div className="d-grid gap-2">
                        <Button onClick ={cartList(itemId)} variant="outline-success" size="lg">Agregar al Carrito</Button>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
}

export default ItemCount