import Item from "../Item/Item";
import React, {useState, useEffect} from 'react';


function ItemList() {
    const [result, setResult] = useState([])
    const lista = [
            {id:1,itemName:"Iphone 6",Price:"300000$",stock:10 ,img:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png"},
            {id:2,itemName:"Samsung S21",Price:"50000$",stock:3, img:"https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg"},
            {id:3,itemName:"Alcatel 1V",Price:"70000$",stock:6, img:"https://i.blogs.es/6947e3/alcatel1v2020/450_1000.jpg"},
            {id:4,itemName:"Iphone XS",Price:"1000000$",stock:4, img:"https://m.media-amazon.com/images/I/81wcv7XP3cL._AC_SL1500_.jpg"}
    ]

    const task = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([lista])
        }, 2000);
    })
    useEffect(() => {
        task.then(res =>{
            console.log(res)
            setResult(res)
        }, err=>{
            console.log(err)
        }).finally(()=>{
            console.log("Finalizado")
        })
        console.log(result)
        
    }, [result])
    
    
    return(
        <>
            {result.map(u=> <Item key={u.id} itemName={u.itemName} itemPrice={u.Price} itemImg={u.img} stockProp={u.stock} />) }
        </>
    );
}

export default ItemList