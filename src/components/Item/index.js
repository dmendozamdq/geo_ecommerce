import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({ data }) =>  {

      
return (
  <div aling="center">
  <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={data.pictureURL} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>CATEGORIA:</b> {data.category} </ListGroup.Item>
        <ListGroup.Item><b>PRECIO:</b> {data.price} </ListGroup.Item>
        
        
      </ListGroup>
      
    </Card>
    </div>
)
       
}

export default Item;