import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';
import {  Navbar } from 'react-bootstrap';

function CartWidget() {
    const {cartList} = useCartContext()
    return(
        <>
            <Navbar.Brand href="#home"><p >{cartList.length}</p ></Navbar.Brand>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCartPlus} /></Navbar.Brand>
        
        </>
    );
}


export default CartWidget