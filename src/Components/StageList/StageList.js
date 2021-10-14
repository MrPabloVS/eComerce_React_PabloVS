import axios from "axios"
import Item from "../Item/Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router";

function StageList() {
    const {Stage} = useParams()
   
    //let listaStage = []

    const [listaStage, setListaStage] = useState([])

    function filtro(key, keyStage, stage) {
        if (stage == keyStage) {
            //listaStage.push(key)
            setListaStage(...listaStage, key)
            

        }
    }

    const getlistaStage = async () => {

        try {
            const respuesta = await axios.get( `https://api.pokemontcg.io/v2/cards`)
            respuesta.data.data.map(u=> filtro(u, u.subtypes[0], Stage)
            )
            console.log(listaStage)
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        getlistaStage()
    }, [])
   
    return(
        <>
            {listaStage.map(u=> <Item key={u.id}  itemName={u.name} itemPrice={"$" + u.cardmarket.prices.trendPrice} itemImg={u.images.small} stockProp={u.set.printedTotal} />) }
        </>
    )
}

export default StageList