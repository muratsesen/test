import React from "react";
import Card from "react-bootstrap/Card";
import { Row,Col } from "react-bootstrap";
import './GuestCommets.css';

const GuestCommets = (props) => {
    const data = props.data;

  return (
    <>
      <Card style={{ backgroundColor:"#222222",overflow: "auto", maxHeight: "400px", color: "black" }}>
        {data.map(item=>{
           return( <Card style={{  margin:"10px 10px 10px 10px"}}>
          <Card.Body>
          <Row>
              <Col xs={6}>
              <span className="comment-title">{item.name}</span>
              </Col>
              <Col xs={6}>
              <span className="comment-date">
              {item.date}
            </span>
              </Col>
          </Row>
            <Card.Text>
              {item.message}
            </Card.Text>
          </Card.Body>
        </Card>)
        })}
        
        
      </Card>
    </>
  );
};

export default GuestCommets;
