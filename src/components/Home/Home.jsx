import React from 'react';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button } from 'react-bootstrap';

const Home = () =>{
    return (
      <div className="home-container">
        <div className="logo">
        </div>
        <Container>
        <Row className="logo">
          <Col>
          <img  src="/images/logos.png" alt="logo"></img>
          </Col>
        </Row>
          <Row className="first-text">
            <Col>
              <h1>PRAGMANILA SOLUTIONS MARKUP TEST</h1>
            </Col>
          </Row>
          <Row className="second-text">
            <Col>
              <h1>
                YOU SHOULD BUILD THIS SIMPLE, LOGICAL, & STRAIGHT FORWARD
              </h1>
            </Col>
          </Row>
          <Row className="third-text">
            <Col>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            </Col>
          </Row>
          <Row className="second-text">
                <Col>
                <Button variant="success" className="button mt-5 mb-5">LEARN MORE</Button>
                </Col>
            </Row>
        </Container>
      </div>
    );
}
export default Home