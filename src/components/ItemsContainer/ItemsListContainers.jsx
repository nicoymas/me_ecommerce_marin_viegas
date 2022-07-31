import "./itemslistcontainer.css"
import React from "react";

function ItemsListContainers(props) {
  console.log(props);
  return (
    
    <div className="greeting">{props.greeting}</div>
  );
}
export default ItemsListContainers;