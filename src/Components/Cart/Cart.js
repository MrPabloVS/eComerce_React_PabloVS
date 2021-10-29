import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

function Cart() {
    const {cartList} = useCartContext()
    return(
        <>
        {cartList.map(i=> <CartItem itemName={i.name} itemAmount={i.amount} itemId={i.id} itemPrice={i.price}/>) }
        </>
    )
}

export default Cart