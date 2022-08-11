import React from "react";
import "./Items.css";
import ItemCount from "../ItemsCount/ItemsCount.jsx";

function Items({name, description, precio, img, stock}) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={img} alt="imagen" />
        </div>
        <div className="card-detail">
          <h5>{name}</h5>
          <p>{description}</p>
          <h5>$ {precio}</h5>
          
        </div>
        <ItemCount stock ={stock} initial={1} data={name}/>  
      </div>
    );
}
export default Items;
