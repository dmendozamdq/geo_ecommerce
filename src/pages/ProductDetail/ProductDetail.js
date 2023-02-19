import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { mockedProducts } from "../../utils/products";
import { fetchCopy } from "../../utils/fetchCopy";
import Item from "../../components/Item";

const ProductDetail = () => {

  const [product , setProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetchCopy(mockedProducts).then((result) => setProducts(result));
    //<ItemDetail data={product} key={product.id}/>

}, []);   

return (
          
  <div>
      {
          
          product.map((prod) => {

            if(prod.id==id)
              {
                return (
                 
                  <Item data={prod} key={prod.id}/>
                  
              )
            
              }
             
             
          })
      }
      
  
  </div>
  
  
);
}

export default ProductDetail