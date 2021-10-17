import axios from "axios"
import Item from "../Item/Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router";

function CategoryList() {
    const {category} = useParams()
   

    const [Categoria, setCategoria] = useState([])


    const getCategoria = async () => {

        try {
            const respuesta = await axios.get( `https://fakestoreapi.com/products/category/${category}`)
            console.log(respuesta.data)
            setCategoria(respuesta.data)
            console.log(Categoria)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getCategoria()
    }, [])
   
    return(
        <>
            {Categoria && Categoria.map(u=> <Item key={u.id}  itemName={u.title} itemPrice={"$" + u.price} itemImg={u.image} stockProp={5} itemId={u.id} />) }
        </>
    )
}

export default CategoryList