

import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Cart() {
    const {cartList, clearSingleItem, precioTotal} = useCartContext()
    console.log(cartList)

    console.log(precioTotal)

    function renderCondicionalCart() {
        if (cartList.length > 0 ) {
            return(
                cartList.map(item => 
                <Card key={item.item.id} className="text-center">
                    <Card.Body>
                        <Card.Title>{item.amount} x {item.item.title}</Card.Title>
                        <Card.Text>{item.item.price}</Card.Text>
                        <Link to={`/info/${item.item.id}`}><Button variant="primary"> +info </Button></Link>
                    </Card.Body>
                    <Card.Footer className="text-muted text-danger" ><Button onClick={()=> clearSingleItem(item)} variant="outline-danger">Eliminar del Carro</Button></Card.Footer>
                </Card>)

                
            )

        } else  {
            return(
                <h2>No hay Productos en el carrito</h2>
            )  
        }}

    return(
        <div>


            {/* { cartList.map(i => <CartItem key={i.item.id} itemName={i.item.title} itemAmount={i.amount} itemId={i.item.id} itemPrice={i.price}/>) } */}

            {/* {cartList.map(item => <Card key={item.item.id} className="text-center">
            <Card.Body>
                <Card.Title>{item.amount} x {item.item.title}</Card.Title>
                <Card.Text>{item.item.price}</Card.Text>
                <Link to={`/info/${item.item.id}`}><Button variant="primary"> +info </Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted text-danger" ><Button onClick={()=> clearSingleItem(item)} variant="outline-danger">Eliminar del Carro</Button></Card.Footer>
        </Card>)} */}

        {renderCondicionalCart()}
        <h3><h3>Precio Total: ${ precioTotal()} </h3></h3>

        </div>
    )
}

export default Cart        