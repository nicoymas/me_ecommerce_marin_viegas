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
          <h4>{name}</h4>
          <p>{description}</p>
          <h4>$ {precio}</h4>
          
        </div>
        <ItemCount stock ={stock} initial={1} data={name}/>  
      </div>
    );
}
export default Items;
