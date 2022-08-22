
import React, { useEffect, useState } from "react";
import ItemsDetail from "./ItemsDetail.jsx";
import DataPlantas from "../data/Data.jsx";
import {useParams} from "react-router-dom";



function ItemsDetailContainers() {
  const {id} = useParams()
  const [data, setData] = useState([]);
 
  function GetPlantasDetail (){
    return new Promise((resolve) => {
      let ItemRecuest= DataPlantas.find(item => item.id === id);
      resolve(ItemRecuest);
    })
  } 
  
  useEffect(() => {
    GetPlantasDetail()
    .then((detail) =>{setData(detail)})
    .catch((error) =>{alert(error)});
  },);
  

  return (
    <div>
      <ItemsDetail 
        key={data.id}
        id={data.id}
        name={data.name}
        description={data.description}
        precio={data.precio}
        img={data.img}
        stock={data.stock}
      />
      
     
    </div>
  );
}
export default ItemsDetailContainers;