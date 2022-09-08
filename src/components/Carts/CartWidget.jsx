import React from 'react';
import "./cartwidget.css"
import {useContext} from "react"
import {CartContext} from "../../context/CartContext.jsx";
import {NavLink} from "react-router-dom";

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
        <NavLink to={"/cart"}><i className="bi bi-cart3" ></i></NavLink></li>
        :
        <li className="cartwidget-container">
        <NavLink to={"/cart"}><i className="bi bi-cart3" ></i></NavLink>{ItemSuma} </li>

            

        
        } 
        </>  
    )
}
export default CartWidget;