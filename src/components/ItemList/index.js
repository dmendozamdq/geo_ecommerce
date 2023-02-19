import React, { useEffect, useState } from "react";
import { mockedProducts } from "../../utils/products";
import { fetchCopy } from "../../utils/fetchCopy";

import Item from "../Item";

const ItemList = ({greeting}) => {

   

    return (
        
        <div>
            {
                
                
                mockedProducts.map((prod) => (
                    <Item 
                        id={prod.id}
                        category={prod.category}
                        title={prod.title}
                        description={prod.description}
                        price={prod.price}
                        pictureURL={prod.pictureURL}

                    />
                ))
                }         
        </div>             
    );
};

        

export default ItemList;