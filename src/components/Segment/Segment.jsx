import React from "react";
import "./Segment.css";
import CardItem from "./Card/CardItem";
import CardDetail from "./Card/CardDetail/CardDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import successData from "../../helpers/successData";
import dangerData from "../../helpers/dangerData";
import secondaryData from "../../helpers/secondaryData";

const Segment = () => {
  return (
    <Container fluid>
    <Row className="arrow">
        <Col>
          <div className="triangle-down"></div>
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <h1>SEGMENT</h1>
        </Col>
      </Row>
      <Row className="boxes">
        <Col>
          <CardItem url="./images/img1.gif" title="Marketing Slot" text="Section below should have more emphasis on hover. "/>
        </Col>
        <Col>
          <CardItem url="./images/img2.gif" title="Marketing Slot" text="Section below should have more emphasis on hover. "/>
        </Col>
        <Col>
          <CardItem url="./images/img3.gif" title="Marketing Slot" text="Section below should have more emphasis on hover. "/>
        </Col>
      </Row>
      <Row className="box-content">
        <Col>
          <CardDetail option="success" data={successData}/>
        </Col>
        <Col>
          <CardDetail option="secondary" data={secondaryData}/>
        </Col>
        <Col>
          <CardDetail option="danger" data={dangerData}/>
        </Col>
      </Row>
    </Container>
  );
};
export default Segment;
