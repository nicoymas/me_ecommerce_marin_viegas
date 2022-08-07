import "./itemslistcontainer.css"
import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList/ItemsList.jsx";
import DataPlantas from "../data/Data.jsx";


function GetPlantas (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataPlantas);
    }, 3000);
  })
} 

function ItemsListContainers(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetPlantas().then((respuesta) =>{
      setData(respuesta);
    });
  },[]);
  

  return (
    <div className="greeting">{props.greeting}
      <ItemsList data={data} />
      
     
    </div>
  );
}
export default ItemsListContainers;