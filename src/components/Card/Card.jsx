import React from "react";
import "./Card.css";
import ItemCount from "../ItemsCount.jsx";

function Card(props) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={props.data.imgurl} alt="imagen" />
        </div>
        <div className="card-detail">
          <h4>{props.data.name}</h4>
          <p>{props.data.description}</p>
          <h4>$ {props.data.price}</h4>
          
        </div>
        <ItemCount stock ={10} initial={1} data={props.data.name}/>  
      </div>
    );
}
export default Card;