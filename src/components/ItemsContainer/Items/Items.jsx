import React from "react";
import "./Items.css";
import{Link} from "react-router-dom";

function Items({id, items}) {
  
  return (
      <div className="card">
        <div className="card-img">
          <img src={items.img} alt="imagen" />
        </div>
        <div className="card-detail">
          <h5>{items.name}</h5>
          
          <h5>$ {items.precio}</h5>
          
        </div>
        <Link className="vermas" to={`/item/${id}`}>ver mas</Link>  
      </div>
    );
}
export default Items;
