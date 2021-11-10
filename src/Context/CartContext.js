import {useState, createContext, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    //States
    const [cartList, setCartList] = useState([])
    const [Item, setItem] = useState([])
    const [sumaTotal, setSumaTotal] = useState(0)

    class cartItem {
        constructor(id, amount, name, price) {
            this.id = id;
            this.amount = amount;
            this.name = name;
            this.price = price;
        }
    }
    

    //Funcion addItem
    const addItem = (item, amount) => {

        const index = cartList.findIndex(i => i.item.id === item.id)//-1, pos
        console.log(index)
    
          if (index > -1) {
            const cantidadEnCart = cartList[index].amount
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, amount: amount + cantidadEnCart}])
          }
          else {
            setCartList([...cartList, {item, amount}])
          }
      }
    /* const addItem=(id, amount, name, price)=>{
        
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
        
    } */


    //Funcion para borrar un solo Item
    const clearSingleItem = (item) =>{
        // for (const objeto of cartList) {
        //     if (objeto.id === itemId) {
        //         delete cartList[objeto]
        //     }
        // }
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        console.log(deleteProduct)
        setCartList([...deleteProduct])
    }

    //Funcion para vaciar carrito
    const clearCart =()=>{
        setCartList([])
    }

    //Funcion para sacar el precio total de la compra
    const precioTotal = () =>{
        // for (const item of cartList) {
        //     setSumaTotal(sumaTotal + item.item.price * item.amount)
        // }
        
        return cartList.reduce((acum, valor)=>(acum + (valor.amount * valor.item.price)), 0)

    }

    console.log(cartList);

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,
            clearSingleItem,
            precioTotal,

        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider