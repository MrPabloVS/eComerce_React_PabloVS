
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect,} from 'react';
import {useParams} from 'react-router'

function ItemDetailContainer() {

    const {id} = useParams()
    const [Poke, setPoke] = useState([])
    

    const getPokeId = async () => {

        try {
            const respuesta = await axios.get( `https://fakestoreapi.com/products/${id}`)
            console.log(respuesta.data)
            setPoke(respuesta.data)
            console.log(Poke)
            console.log(id)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getPokeId()
    }, [])

    return(
        <>
           {Poke && Poke.map(poke => <ItemDetail itemName={Poke.title} itemPrice={"$" + Poke.price} itemImg={Poke.image} stockProp={5} itemId={Poke.id}></ItemDetail> )}
        </>
    )

}

export default ItemDetailContainer