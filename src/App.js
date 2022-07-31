
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemsListContainers from './components/ItemsContainer/ItemsListContainers.jsx';
function App() {
  return (
    <div>
    <NavBar/>
    
    <ItemsListContainers greeting= "cantero"/>
    </div>
  );
}

export default App;
