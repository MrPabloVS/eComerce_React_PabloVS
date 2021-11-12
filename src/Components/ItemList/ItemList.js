import Item from "../Item/Item";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Row} from 'react-bootstrap'
import Loading from "../Loading/Loading";



function ItemList({lista}) {
    //const [lista, setLista] = useState([])
    //const [Loading, setLoading] = useState(true)

    // const getlista = async () => {

    //     try {
    //         const respuesta = await axios.get( `https://fakestoreapi.com/products`)
    //         console.log(respuesta.data)
    //         setLista(respuesta.data)
    //         console.log(lista)
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // }

    // const cambiarEstadoCarga = ()=> {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 5000);
    // }
        
    
    


    // useEffect(() => {
    //     getlista()
    //     cambiarEstadoCarga()
    // }, []) 
    
    
    return(
        <div>   
            {/* {Loading = false ? <Loading/> :} */}
            <Row xs={1} md={4} className="g-4">
                {lista && lista.map(u=> <Item key={u.id}  itemName={u.title} itemPrice={"$" + u.price} itemImg={u.img} stockProp={5} itemId={u.id} />) }
            </Row>
        </div>
    );
}

export default ItemList