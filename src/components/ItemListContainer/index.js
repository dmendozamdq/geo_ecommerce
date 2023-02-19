import React from "react";
//import Item from "../Item";
import ItemList from "../ItemList";
import ItemDetailContainer from "../ItemDetailContainer";

const Listcontainer = ({greeting, subtitle}) => {

    return (
        
        <div>
        
        <h2>{greeting}</h2>
        <h6>{subtitle}</h6>
        <ItemDetailContainer />
        </div>
        
        
    );

};

export default Listcontainer;