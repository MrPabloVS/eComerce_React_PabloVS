import ItemCount from '../ItemCount/ItemCount';
import {Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';



function ItemDetail({itemImg, itemName, itemPrice, stockProp, condition = true}) {

    const {addNumber} = ItemCount
    const [totalOnCart, setTotalOnCart] = useState(0)

    onAdd(addNumber); {
        setTotalOnCart(totalOnCart + addNumber)
    }
    
    return(
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>
                    {itemPrice}
                    </Card.Text>
                    {condition = true ? <ItemCount stockProp={stockProp} totalOnCart={totalOnCart}/> :
                    <div><Link to="/cart"><Button>Terminar mi compra</Button></Link>
                    <Link to="/"><Button>Seguir Comprando</Button></Link></div>}
                </Card.Body>
                </Card>
            </>
    )

}

export default ItemDetail