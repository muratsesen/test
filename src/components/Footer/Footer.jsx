import React from 'react';
import './footer.css';
import { Row,Col } from 'react-bootstrap';
const Footer = () =>{
    const footer = {
        minHeight:"80px",
   
    };
    return (
        <div className="footer" style={footer}>
        
            <Row style={{color:"#212121"}}>
                <Col ><span>2013, PRAGMANILA SOLUTIONS INCORPORATED</span></Col>
                <Col> HOME SERVICES CONTACT</Col>
            </Row>
        </div>
    );
}
export default Footer