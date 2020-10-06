import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInputState from "../../../hooks/useInputState";
import moment from 'moment';

const GuestForm = ({onSubmit}) => {
    const [name, handleChangeName,resetName] = useInputState("");
    const [subject, handleChangeSubject,resetSubject] = useInputState("");
    const [message, handleChangeMessage,resetMessage] = useInputState("");

  return (
    <Card
      style={{ backgroundColor: "#222222", height: "400px",  color: "black" }}
    >
      <Card.Body>
        <Form onSubmit={(e)=>{
            e.preventDefault();
            onSubmit({name,date:moment().format('DD/MM/YY-hh:mm.ss'),subject,message});
            resetName();
            resetSubject();
            resetMessage();
            }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Name" value={name} onChange={handleChangeName}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Subject" value={subject} onChange={handleChangeSubject} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={6} placeholder="Message" value={message} onChange={handleChangeMessage} />
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 5 }}>
              <Button variant="success" type="submit">
                SEND
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default GuestForm;
