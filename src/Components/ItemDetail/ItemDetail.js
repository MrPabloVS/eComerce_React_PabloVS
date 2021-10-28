import ItemCount from '../ItemCount/ItemCount';
import {Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



function ItemDetail({itemId,itemImg, itemName, itemPrice, stockProp, }) {
    const {seClickeo} = ItemCount
    const {addNumber} = ItemCount
    const [totalOnCart, setTotalOnCart] = useState(0)

    // function onAdd  (addNumber) {
    //     setTotalOnCart(totalOnCart + addNumber)
    // }

    // useEffect(() => {
    //     onAdd()
    // }, [])
    console.log(seClickeo)
    function decidirBoton() {
        if (seClickeo === false) {
            return(
                <ItemCount stockProp={stockProp} totalOnCart={totalOnCart} itemId={itemId}/>
            )
        } else if(seClickeo === true) {
            return(<div><Link to="/cart"><Button>Terminar mi compra</Button></Link>
            <Link to="/"><Button>Seguir Comprando</Button></Link></div>)  
        }}
    

    return(
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>
                    {itemPrice}
                    </Card.Text>
                    {/* seClickeo = true ? <ItemCount stockProp={stockProp} totalOnCart={totalOnCart} itemId={itemId}/> :
                     <div><Link to="/cart"><Button>Terminar mi compra</Button></Link>
                    <Link to="/"><Button>Seguir Comprando</Button></Link></div>  */}
                    <ItemCount stockProp={stockProp} totalOnCart={totalOnCart} itemId={itemId} itemName={itemName}/>
                    {decidirBoton()}
                </Card.Body>
                </Card>
            </>
    )

}

export default ItemDetail