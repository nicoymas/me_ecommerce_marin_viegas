import React from 'react';
import "./cartwidget.css"
import {useContext} from "react"
import {CartContext} from "../../context/CartContext.jsx";

function CartWidget (){
    const{ItemsInCart}=useContext(CartContext)
    
    let ItemSuma=0
    ItemsInCart.forEach(element => {
        ItemSuma+=element.count
    }); 

    
    return (
        <>
        {ItemSuma===0 ?
        <li className="cartwidget-container">
        <a href={"/cart"}><i className="bi bi-cart3" ></i></a></li>
        :
        <li className="cartwidget-container">
        <a href={"/cart"}><i className="bi bi-cart3" ></i></a>{ItemSuma} </li>
    
        
        } 
        </>  
    )
}
export default CartWidget;