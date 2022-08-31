import React ,{useContext}from 'react';
import {CartContext} from "../../context/CartContext.jsx";
import "./vistacart.css"

function VistaCart({id, items}) {
  const{removeItem}=useContext(CartContext)
  
  return (
    
    <div className="card">
      <div className="card-img">
        <img src={items.img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h5>{items.name}</h5>
        <p className="description">{items.description}</p>
        <h5>$ {items.precio* items.count}</h5>
      </div>
      <div>
        <button  onClick={()=>{removeItem(id)}}>eliminar</button>
      </div>
  </div>
    );
  }
  export default VistaCart;
