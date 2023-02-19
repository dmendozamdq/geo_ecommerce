import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = ({ data }) =>  {

     
return (
  <Card style={{ width: '18rem', textDecoration: 'none'}}>
      <Card.Img variant="top" src={data.pictureURL} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>CATEGORIA: {data.category} </ListGroup.Item>
        <ListGroup.Item>PRECIO: {data.price} </ListGroup.Item>
        
      </ListGroup>
      
    </Card>

)
       
}

export default ItemDetail;