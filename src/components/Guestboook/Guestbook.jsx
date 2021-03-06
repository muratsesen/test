import React, {useState} from 'react';
import './Guestbook.css'
import { Row,Col } from 'react-bootstrap';
import GuestForm from './GuestForm/GuestForm';
import GuestCommets from './GuestCommets';
import MockData from "../../helpers/data";

const Guestbook = () =>{
  const[data,setData] = useState(MockData);
  const onSubmit = (newData) => {
    MockData.push(newData);
    setData([...MockData],newData);
  }
 

    return (
      <div className="main">
        <Row className="title">
          <Col><h1>GUESTBOOK</h1></Col>
        </Row>
          <Row className="forms">
            <Col sm={6} xs={12} lg={6}>
            <GuestForm onSubmit={onSubmit}/>
            </Col>
            
            <Col sm={6} xs={12} lg={6}>
            <GuestCommets data={data}/>
            </Col>
          </Row>
       
      </div>
    );
}
export default Guestbook