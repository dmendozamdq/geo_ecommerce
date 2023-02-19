import React from "react";
import { useState, useEffect } from "react";
import { mockedProducts } from "../../utils/products";
import ItemDetail from "../ItemDetail";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';    
import { fetchCopy } from "../../utils/fetchCopy";
import axios from "axios";
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    //ESTO SE USARIA SI LA API ESTUVIESE EN UN ARCHIVO
    useEffect(() => {
        fetchCopy(mockedProducts).then((result) => setProducts(result));

    }, []);

  
    //ESTO SE USARIA SI LA API ESTUVIESE EN UN SERVIDOR EXTERNO
    /*useEffect(() => {
        axios.get(`http://apidemo.geoducacion.com.ar/api/capacitacion/cursos/`).then((response) => {
            setProducts(response.data);
          });
          */
        //fetch("http://apidemo.geoducacion.com.ar/api/capacitacion/cursos/")
        //.then((response) => response.json())
        //.then((json) => setProducts(json));
    //}, []);
    
    
    return (
          
            <div>
                <Row>
                {
                    
                    products.map((prod) => {
                       
                         return (
                            
                                <Col sm>
                                <Link to={`/item/${prod.id}`}>
                                <ItemDetail data={prod} key={prod.id}/>;
                                </Link>
                                </Col>
                            )
                           
                     
                    })
                }
                
                </Row>
            </div>
            
            
        );
    
};

export default ItemDetailContainer;