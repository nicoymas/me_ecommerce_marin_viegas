import React , {useState}from "react";
import "./ItemsDetail.css";
import ItemCount from "../ItemsContainer/ItemsCount/ItemsCount.jsx";
import {NavLink} from "react-router-dom";
import {useContext} from "react"
import {CartContext} from "../../context/CartContext.jsx";

function ItemsDetail({id, name, description, precio, img, stock}) {
  const {addToCart}= useContext(CartContext)
  const [InCart,setInCart] =useState(0);

  function handleAdd(quantity) {
    const itemToCart = { id,name, description, precio, img, stock}
    addToCart(itemToCart,quantity)
    setInCart(quantity); 
  }
    
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
        {InCart === 0 ?<ItemCount stock ={stock} initial={1} data={name} onAdd={handleAdd} text ="finalizar compra"/> 
        :
        <NavLink className="card" to={"/cart"}>ver carrito</NavLink> }
        
    </div>
    );
}
export default ItemsDetail;



