import Item from "../Item/Item";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Row} from 'react-bootstrap'




function ItemList() {
    const [lista, setLista] = useState([])
    const getlista = async () => {

        try {
            const respuesta = await axios.get( `https://api.pokemontcg.io/v2/cards`)
            console.log(respuesta.data)
            setLista(respuesta.data.data)
            console.log(lista)
        } catch (error) {
            console.log(error)
            
        }
    }
        // {id:1,itemName:"Iphone 6",Price:"300000$",stock:10 ,img:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png"},
        // {id:2,itemName:"Samsung S21",Price:"50000$",stock:3, img:"https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg"},
        // {id:3,itemName:"Alcatel 1V",Price:"70000$",stock:6, img:"https://i.blogs.es/6947e3/alcatel1v2020/450_1000.jpg"},
        // {id:4,itemName:"Iphone XS",Price:"1000000$",stock:4, img:"https://m.media-amazon.com/images/I/81wcv7XP3cL._AC_SL1500_.jpg"}
    
    //const [result, setResult] = useState([])
    
    

    // const task = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve([lista])
    //     }, 2000);
    // })
    // useEffect(() => {
    //     task.then(res =>{
    //         console.log(res)
    //         setResult(lista)
    //     }, err=>{
    //         console.log(err)
    //     }).finally(()=>{
    //         console.log("Finalizado")
    //     })
    //     console.log(result)
     //   
    //}, )

    useEffect(() => {
        getlista()
    }, []) 
    
    
    return(
        <div>   
            <Row xs={1} md={4} className="g-4">
                {lista.map(u=> <Item key={u.id}  itemName={u.name} itemPrice={"$" + u.cardmarket.prices.trendPrice} itemImg={u.images.small} stockProp={u.set.printedTotal} itemId={u.id} />) }
            </Row>
        </div>
    );
}

export default ItemList