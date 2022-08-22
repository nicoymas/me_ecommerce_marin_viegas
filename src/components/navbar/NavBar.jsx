import "./NavBar.css"
import CartWidget from "../Carts/CartWidget.jsx";
import ImageLog from "./imagelog.jsx";
import {NavLink} from "react-router-dom";

function NavBar() {
    let LinkActive = {
        color: "green",
    };
    return(
        <nav className="ContainerNav">
            <div className="NavBar">
                
                <ImageLog/>
                <ul>
                    <li><NavLink 
                        style={({isActive})=>(isActive?LinkActive: undefined)}
                        to="/">home</NavLink>
                    </li>
                  
                    <li><NavLink 
                        style={({isActive})=>(isActive?LinkActive: undefined)}
                        to={"/category/exterior"}>exterior</NavLink>
                    </li>
                    <li><NavLink 
                        style={({isActive})=>(isActive?LinkActive: undefined)}
                        to={"/category/interior"}>interior</NavLink>
                    </li>
                    <li><NavLink 
                        style={({isActive})=>(isActive?LinkActive: undefined)}
                        to={"/form"}>Contacto</NavLink>
                    </li>
                    <li><NavLink 
                        style={({isActive})=>(isActive?LinkActive: undefined)}
                        to={"/cart"}>Carrito</NavLink>
                    </li>
                    
                </ul>
                <CartWidget />

            </div>
        </nav>     
        
    );

}
export default NavBar;