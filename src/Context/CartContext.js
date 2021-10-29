import {useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    //States
    const [cartList, setCartList] = useState([])
    const [Item, setItem] = useState([])

    class cartItem {
        constructor(id, amount, name, price) {
            this.id = id;
            this.amount = amount;
            this.name = name;
            this.price = price;
        }
    }
    

    //Funcion addItem
    const addItem=(id, amount, name, price)=>{
        
         if (cartList.some((producto) => producto.id === id)) {
             for (const objeto of cartList) {
                 if (objeto.id === id) {
                     objeto.amount = objeto.amount + amount
                     objeto.price = objeto.price + amount * price
                 }
                 
             }
             console.log(cartList)
         }
         else{
             setCartList([...cartList, new cartItem(id, amount, name, price )])
             console.log(cartList)
         }
        
    }


    //Funcion para borrar un solo Item
    const clearSingleItem = (itemId) =>{
        for (const objeto of cartList) {
            if (objeto.id === itemId) {
                delete cartList[objeto]
            }
        }
        
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
            clearSingleItem,

        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider