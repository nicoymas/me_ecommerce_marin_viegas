import React from 'react';
import "./cartwidget.css"
function CartWidget (){
    return (
        <li className="cartwidget-container"><i className="bi bi-cart3" onClick={()=>alert("Cart")}></i> </li>   
    )
}
export default CartWidget;