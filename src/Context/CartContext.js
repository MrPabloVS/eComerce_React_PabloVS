import {useState, createContext } from "react";


const CartContext = createContext([])

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    return(
        <CartContext value={{
            cartList,
            setCartList
        }}>
            {children}
        </CartContext>

    )
}

export default CartContextProvider