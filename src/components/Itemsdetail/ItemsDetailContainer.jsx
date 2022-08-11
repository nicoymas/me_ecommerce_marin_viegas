
import React, { useEffect, useState } from "react";
import ItemsDetail from "./ItemsDetail.jsx";
import DataPlantas from "../data/Data.jsx";


function GetPlantasDetail (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DataPlantas[3]);
    }, 1500);
  })
} 

function ItemsDetailContainers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetPlantasDetail().then((detail) =>{
      setData(detail);
    });
  },[]);
  
  console.log(data)
  return (
    <div >
      <ItemsDetail 
        key={data.id}
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