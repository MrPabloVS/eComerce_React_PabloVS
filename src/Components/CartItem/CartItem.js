import {Card,Button} from 'react-bootstrap';
import { useCartContext } from '../../Context/CartContext'
import {Link} from 'react-router-dom'



function CartItem(itemId, itemName, itemAmount, itemPrice) {

    const {clearSingleItem} = useCartContext()
    
    return(
        <>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{itemAmount} x {itemName}</Card.Title>
                <Card.Text>{itemPrice}</Card.Text>
                <Link to={`/info/${itemId}`}><Button variant="primary"> +info </Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted text-danger" onClick={()=> clearSingleItem()}>eliminar del carro</Card.Footer>
        </Card>
        </>
    )
}

export default CartItem