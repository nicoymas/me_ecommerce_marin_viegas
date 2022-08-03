import React ,{useState} from "react";
import "./ItemsCount.css";

function ItemCount(props) {
  console.log(props.stock, props.initial); /* Valor máximo del contador */

  const [cantidad , setCantidad] = useState(1); /* hook de estado */

  const handleIncrement = () => {
    if (cantidad < props.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleDecrement = () => {
    cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(1);
  };

  const onAdd = () => {
    alert(`Agregaste ${cantidad} unidades de ${props.data}`);
  };
  console.log(props)
  return (
    <>
        
        
        <button className="btn-decrement" onClick={handleDecrement}>-</button>
        
        <h4 className="text-center" >{cantidad}</h4>
        
        <button className="btn-increment" onClick={handleIncrement}>+</button>
        <button className="btn-onAdd" onClick={onAdd}>Compra</button>
    
          
    </>
  );
}

export default ItemCount;
