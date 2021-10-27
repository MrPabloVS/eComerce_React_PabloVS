import {useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [Item, setItem] = useState([])

    const addItem=(item, cantidad)=>{
        const findInCart = cartList.find(element => element = item)
        const isInCart = ()=> {
            if (item === findInCart) {
                return(true)
            }
            else  {
                return(false)
            }
        }
        
        setItem([item, cantidad])

        if (isInCart === false) {
            setCartList([...cartList, Item])
        }

        //setCartList([...cartList, item])
    }

    const clearCart =()=>{
        setCartList([])
    }

    console.log(cartList);

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,

        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider