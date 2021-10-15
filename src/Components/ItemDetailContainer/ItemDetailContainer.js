
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect,} from 'react';
import {useParams} from 'react-router'

function ItemDetailContainer() {

    const {id} = useParams()
    const [Poke, setPoke] = useState([])
    //let Poke = []

    const getPokeId = async () => {

        try {
            const respuesta = await axios.get( `https://api.pokemontcg.io/v2/cards/${id}`)
            console.log(respuesta.data)
            setPoke(respuesta.data.data)
            //Poke = respuesta.data.data
            console.log(Poke)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getPokeId()
    }, [])

    return(
        <>
           {/* <ItemDetail itemName={Poke.name} itemPrice={"$" + Poke.cardmarket.prices.trendPrice} itemImg={Poke.images.small} stockProp={Poke.set.printedTotal} itemId={Poke.id}></ItemDetail>  */}
        </>
    )

}

export default ItemDetailContainer