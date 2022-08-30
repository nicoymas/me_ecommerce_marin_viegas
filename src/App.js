
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemsListContainers from './components/ItemsContainer/ItemsListContainers.jsx';
import ItemsDetailContainers from './components/Itemsdetail/ItemsDetailContainer.jsx';
import FormContact from './components/formulario/FormContact.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Carts/Cart.jsx';
import {CartProvider} from './context/CartContext.jsx';
// import database from "./services/firebase"
function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element ={<ItemsListContainers />}/>
            <Route path="/item/:id" element ={<ItemsDetailContainers/>}/>
            <Route path="/category/:categoria" element ={<ItemsListContainers/>}/>
            <Route path="/form" element ={<FormContact/>}/>
            <Route path="/cart" element ={<Cart/>}/>
          </Routes>
        </CartProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
