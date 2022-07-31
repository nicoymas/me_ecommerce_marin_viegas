import "./NavBar.css"
import CartWidget from "../Carts/CartWidget.jsx";
import ImageLog from "./imagelog.jsx";
function NavBar() {
    return(
        <nav className="ContainerNav">
            <div className="NavBar">
                
                <ImageLog/>
                <ul>
                    <li><a href="!#">carrito</a></li>
                    <li><a href="!#">contacto</a></li>
                    <li><a href="!#">servicios</a></li>
                </ul>
                <CartWidget />

            </div>
        </nav>     
        
    );

}
export default NavBar;