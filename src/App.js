
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
//import ItemsListContainers from './components/ItemsContainer/ItemsListContainers.jsx';
import ItemsDetailContainers from './components/Itemsdetail/ItemsDetailContainer.jsx';
function App() {
  return (
    <div>
    <NavBar/>
    <ItemsDetailContainers/>
    {/*<ItemsListContainers greeting= "cantero"/>*/}
    </div>
  );
}

export default App;
