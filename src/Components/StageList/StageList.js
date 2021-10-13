import axios from "axios"
import Item from "../Item/Item"
import { useEffect } from "react"

function StageList({Stage}) {
   
    let listaStage = []
    function filtro(key, stage) {
        if (stage === "Basic") {
            listaStage.push(key)
        }else if (stage === "Stage 1") {
            listaStage.push(key)
        }else if (stage === "Stage 2") {
            listaStage.push(key)
        }
    }
    const getlistaStage = async () => {

        try {
            const respuesta = await axios.get( `https://api.pokemontcg.io/v2/cards`)
            respuesta.data.data.map(u=> filtro(u, Stage)
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