
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemsListContainers from './components/ItemsContainer/ItemsListContainers.jsx';
import ItemsDetailContainers from './components/Itemsdetail/ItemsDetailContainer.jsx';
import FormContact from './components/formulario/FormContact.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/cart/CartWidget.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element ={<ItemsListContainers greeting= "cantero"/>}/>
          <Route path="/item/:id" element ={<ItemsDetailContainers/>}/>
          <Route path="/category/:categoria" element ={<ItemsListContainers/>}/>
          <Route path="/form" element ={<FormContact/>}/>
          <Route path="/cart" element ={<CartWidget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
