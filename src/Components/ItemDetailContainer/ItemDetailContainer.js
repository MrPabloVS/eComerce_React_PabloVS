GET `https://api.pokemontcg.io/v2/cards`
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react';


function ItemDetailContainer({id}) {
    const getPokemon = new Promise((resolve, reject)=>{
        setTimeout(() => {
            axios.get(`https://api.pokemontcg.io/v2/cards`)
            .then(resolve(Response.data))
            
        }, 2000);
    })
    const [pokeResult, setPokeResult] = useState([])

    useEffect(() => {
        getPokemon.then(res =>{
            console.log(res)
            setPokeResult(res)
        }, err=>{
            console.log(err)
        }).finally(()=>{
            console.log("Finalizado")
            
        })
        
        
    }, )
    return(
        <>
           <ItemDetail itemImg={pokeResult[id].images.large} itemName={pokeResult[id].name} itemPrice={pokeResult[id].prices.market} stockProp={pokeResult[id].set.total}></ItemDetail> 
        </>
    )

}

export default ItemDetailContainer