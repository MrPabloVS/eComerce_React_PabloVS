import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';
import { Col } from 'react-bootstrap';

function CartWidget() {
    const {cartList} = useCartContext()
    return(
        <div className="container">
        <Col><p >{cartList.length}</p ></Col>
        <Col><FontAwesomeIcon icon={faCartPlus} /></Col>
        </div>
    );
}


export default CartWidget