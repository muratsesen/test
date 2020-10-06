import React from "react";
import Card from 'react-bootstrap/Card'
import { Row, Col } from "react-bootstrap";
import './CardItem.css';

const CardItem = (props) => {
  const {url,title,text} = {...props};
  return (
    <div className="card-main">
    <Row>
      <Col sm={12} xs={12} lg={12}><img src={url} alt="img1"></img></Col>
   
      <Col sm={12} xs={12} lg={12}><span className="title">{title}</span></Col>
    
      <Col sm={12} xs={12} lg={12}><span className="text">{text}</span></Col>
    </Row>
    </div>
  );
};

export default CardItem;