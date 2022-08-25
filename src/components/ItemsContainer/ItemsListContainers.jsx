import "./itemslistcontainer.css"
import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList/ItemsList.jsx";
import DataPlantas from "../data/Data.jsx";
import {useParams} from "react-router-dom";


function ItemsListContainers(props) {
  const [data, setData] = useState([]);
  const {categoria}=useParams()
  
  function GetPlantas (){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataPlantas);
      });
    })
  } 

  useEffect(() => {
    GetPlantas()
    .then((product) =>{
      let FlitProd=product.filter((items) => items.categoria === categoria)
      if (categoria === undefined){
        setData(product)
      }
      else{
        setData(FlitProd);
      }
    })
    
  },);
  
  return (
    <div >
      <ItemsList data={data}/>
    </div>
  );
}
export default ItemsListContainers;

