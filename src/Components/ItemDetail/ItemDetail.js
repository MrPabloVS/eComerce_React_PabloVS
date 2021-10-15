import ItemCount from '../ItemCount/ItemCount';
import {Card} from 'react-bootstrap';

function ItemDetail({itemImg, itemName, itemPrice, stockProp,}) {
    
    return(
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>
                    {itemPrice}
                    </Card.Text>
                    <ItemCount stockProp={stockProp}/>
                </Card.Body>
                </Card>
            </>
    )

}

export default ItemDetail