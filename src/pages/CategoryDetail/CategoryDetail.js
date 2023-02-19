import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';   
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { mockedProducts } from "../../utils/products";
import { fetchCopy } from "../../utils/fetchCopy";
import ItemDetail from "../../components/ItemDetail";
import { Link } from 'react-router-dom';

const CategoryDetail = () => {

  const [product , setProducts] = useState([]);

  let { id } = useParams();
  
  

  useEffect(() => {
    fetchCopy(mockedProducts).then((result) => setProducts(result));
    //<ItemDetail data={product} key={product.id}/>

    }, []);   

return (
          
  <div>
    <h6>CATEGORÍA</h6>  
   
    {
          
          product.map((prod) => {
            
            if(prod.id_category==id)
              {
                
                        return (
                            <h2>{prod.category}</h2>    
                               )
                
            
              }
             
             
          })
      }
      
    
    <Row>
      {
          
          product.map((prod) => {

            if(prod.id_category==id)
              {
                return (
                    <Col sm>    
                  <Link to={`/item/${prod.id}`}>
                                <ItemDetail data={prod} key={prod.id}/>;
                                </Link>
                  </Col>
                  
              )
            
              }
             
             
          })
      }
      
      </Row>
  </div>
  
  
);
}

export default CategoryDetail