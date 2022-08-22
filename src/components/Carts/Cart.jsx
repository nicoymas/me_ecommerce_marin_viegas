import React from 'react';
import './cart.css';
import {useContext} from "react"
import {CartContext} from "../../context/CartContext.jsx";
import VistaCart from './VistaCart';


function Cart() {
    const {ItemsInCart}=useContext(CartContext)
    const{Clear}=useContext(CartContext)
    
    return(
        <div className="container-detail">
            {
                ItemsInCart.map(items=>(
                    <VistaCart
                    key={items.id}
                    id ={items.id}
                    items={items}
                    
                    />
                ))
            }
            <div>
            <button  onClick={()=>{Clear(ItemsInCart)}}>eliminar</button>
            </div>

        </div>
    )
    
}export default Cart