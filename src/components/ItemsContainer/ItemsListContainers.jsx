import "./itemslistcontainer.css"
import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList/ItemsList.jsx";
// import DataPlantas from "../data/Data.jsx";
import {useParams} from "react-router-dom";
import database from "../../services/firebase";
import {getDocs ,collection,query, where} from "firebase/firestore";

function ItemsListContainers() {
  const [data, setData] = useState([]);
  const {categoria}=useParams()
  
  function GetPlantas (){
    return new Promise((resolve) => {
      const Plantascollection= collection(database,"Plantas")
      
      getDocs(Plantascollection).then(snaphot =>{
        snaphot.docs[0].data();
        const docData=snaphot.docs.map(doc =>{
          return{...doc.data(), id : doc.id}
          
        });
        resolve(docData);

      })
    })
  } 


  const getCategory= (categori) => {
    return new Promise((resolve) => {
      const Plantascollection= collection(database,"Plantas");
      const q = query(Plantascollection ,where("categoria","==",categori))
      getDocs(q).then(snapshot => {
        const docCategori= snapshot.docs.map(doc =>{
          return {...doc.data(), id:doc.id}
        });
        resolve(docCategori);
      })
    })
  }

  

  useEffect(() => {
    GetPlantas()
    .then((product) =>{ 
      // let FlitProd=product.filter((items) => items.categoria === categoria)
      if (categoria === undefined){
        setData(product)
      }
      else{
        getCategory(categoria).then((category) =>{
          setData(category)
        })
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

