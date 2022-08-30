
import React, { useEffect, useState } from "react";
import ItemsDetail from "./ItemsDetail.jsx";
// import DataPlantas from "../data/Data.jsx";
import {useParams} from "react-router-dom";

import database from "../../services/firebase";
import {getDoc ,collection, doc } from "firebase/firestore";


function GetPlantasDetail (id){
  return new Promise((resolve) => {
    const Plantasdetaill= collection(database,"Plantas");
    
    const DocRef =doc(Plantasdetaill,id);
  
    getDoc(DocRef).then(snaphot => {
      console.log(snaphot)
      resolve(
        {...snaphot.data(), id: snaphot.id}
      )
    })
  })
} 


function ItemsDetailContainers() {
  const {id} = useParams()
  const [data, setData] = useState([]);
 
  

  useEffect(() => {
    GetPlantasDetail(id)
    .then(detail =>{setData(detail)})
    .catch((error) =>{alert(error)});
  },[]);
  

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