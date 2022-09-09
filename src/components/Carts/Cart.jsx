import React,{useContext} from 'react';
import './cart.css';
import {CartContext} from "../../context/CartContext.jsx";
import VistaCart from './VistaCart';
import {NavLink} from "react-router-dom";
import FormContact from "../formulario/FormContact"


function Cart() {
    const {ItemsInCart}=useContext(CartContext)
    const{Clear}=useContext(CartContext)
    let TotalCart=0;

    ItemsInCart.forEach(items => 
        TotalCart+=items.count*items.precio)
    
    return(
        < >
            {
            ItemsInCart.map(items=>(
                <VistaCart
                key={items.id}
                id ={items.id}
                items={items}
                />  
            ))
            }
            {
            ItemsInCart.length === 0 ?
            <div>
                <p className='NoItems'>no hay items en el carrito</p>
                <br />
                <ul><NavLink className="link-inicio" to={"/"}>regresar a inicio</NavLink></ul>
            </div>   
            :
            <div>
                <h2>
                precio total: ${TotalCart}
                </h2>
                <button className='btn_delet' onClick={()=>{Clear(ItemsInCart)}}>eliminar productos</button>
                <FormContact datacart={ItemsInCart} totalcart={TotalCart} />
            </div>
            }
        </>
    ) 
}export default Cart