
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect,} from 'react';
import {useParams} from 'react-router'

function ItemDetailContainer() {

    const {id} = useParams()
    const [Produc, setProduc] = useState([])
    

    const getProducId = async () => {

        try {
            const respuesta = await axios.get( `https://fakestoreapi.com/products/${id}`)
            console.log(respuesta.data)
            setProduc(respuesta.data)
            console.log(Produc)
            console.log(id)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getProducId()
    }, [])

    return(
     <>
         <ItemDetail item={Produc} itemName={Produc.title} itemPrice={"$" + Produc.price} itemImg={Produc.image} stockProp={5} itemId={id}></ItemDetail>       
     </>
    )

}

export default ItemDetailContainer