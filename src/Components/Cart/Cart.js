import { useCartContext } from "../../Context/CartContext";

function Cart() {
    const {cartList} = useCartContext()
    return(
        <>
        {cartList.map(u=> <h4>{u}</h4>) }
        </>
    )
}

export default Cart