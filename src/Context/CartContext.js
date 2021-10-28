import {useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    //States
    const [cartList, setCartList] = useState([])
    const [Item, setItem] = useState([])

    class cartItem {
        constructor(id, amount, name) {
            this.id = id;
            this.amount = amount;
            this.name = name;
        }
    }
    

    //Funcion addItem
    const addItem=(id, amount, name)=>{
        
         if (cartList.some((producto) => producto.id === id)) {
             for (const objeto of cartList) {
                 if (objeto.id === id) {
                     objeto.amount = objeto.amount + amount
                 }
                 
             }
             console.log(cartList)
         }
         else{
             setCartList([...cartList, new cartItem(id, amount, name)])
             console.log(cartList)
         }
        //const findInCart = cartList.find(element => element === item)
        //console.log(findInCart)

        // const isInCart = ()=> {
        //     if (item === findInCart) {
        //         return(true)
        //     }
        //     else {
        //         return(false)
        //     }
            
        // }
        
        // setItem([item, cantidad])
        // console.log(Item)
        

        // if (isInCart === false) {
        //     setCartList([...cartList, Item])
        //     console.log(cartList)
        
        // }
        // else{
            
        // }
        //setCartList([...cartList, item])
    }

    //Funcion para vaciar carrito
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