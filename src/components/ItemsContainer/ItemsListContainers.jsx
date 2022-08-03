import "./itemslistcontainer.css"
import React from "react";
import Card from "../Card/Card";

const dataPlantas = [
  {
    name: 'Epipremnum aureum(potus)',
    price: 200,
    imgurl: "https://res.cloudinary.com/proyectoreact/image/upload/v1659396632/samples/Captura_de_pantalla_2022-08-01_171219_yc1m03.png",
    description:"Liana que puede alcanzar 20 m de alto, con tallos de hasta 4 cm de diámetro. exelente para interiores",
  }
];

function ItemsListContainers(props) {
  return (
    <div className="greeting">{props.greeting}
      <Card data={dataPlantas[0]} />
    
    </div>
  );
}
export default ItemsListContainers;