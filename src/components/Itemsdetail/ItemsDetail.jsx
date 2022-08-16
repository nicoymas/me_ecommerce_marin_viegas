import React from "react";
import "./ItemsDetail.css";
import ItemCount from "../ItemsContainer/ItemsCount/ItemsCount.jsx";

function ItemsDetail({name, description, precio, img, stock}) {
    
    return (
    <div>    
        <div className="container-detail">
          <div className="d-img">
            <img src={img} alt="" className="detail-img" />
          </div>
          <div className="d-det">
            <h2>
              <span className="gray-detls">Producto:</span> {name}
            </h2>
            <h3>
              <span className="gray-detls">Valor: </span>$ {precio} USD
            </h3>
            <p>
              <span className="gray-detls-p">Conocela un poco mas ...</span>{" "}
              {description}
            </p>
            <div className="container-bying">

            </div>
          </div>
        </div>
        <ItemCount stock ={stock} initial={1} data={name}/>  
    </div>
    );
}
export default ItemsDetail;



