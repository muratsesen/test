import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInputState from "../../../hooks/useInputState";
import moment from "moment";
import './GuestForm.css'
const GuestForm = ({ onSubmit }) => {
  const [name, handleChangeName, resetName] = useInputState("");
  const [subject, handleChangeSubject, resetSubject] = useInputState("");
  const [message, handleChangeMessage, resetMessage] = useInputState("");
  const [nameError, handleChangeNameError] = useState(false);
  const [subjectError, handleChangeSubjectError ] = useState(false);
  const [messageError, handleChangeMessageError ] = useState(false);

  return (
    <Card
      style={{ backgroundColor: "#222222", height: "400px", color: "black" }}
    >
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            let nameError = false,subjectError = false,messageError = false;
            if(name === null || name === "")
              nameError =true;
            if(subject === null || subject === "")
            subjectError = true;
            if(message === null || message === "")
              messageError =  true;
            handleChangeNameError(nameError);
            handleChangeSubjectError(subjectError);
            handleChangeMessageError(messageError);
            if(nameError || subjectError || messageError) return
            

            onSubmit({
              name,
              date: moment().format("DD/MM/YY-hh:mm.ss"),
              subject,
              message,
            });
            resetName();
            resetSubject();
            resetMessage();
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <div class="alert alert-danger" role="alert" hidden={ !nameError ? "hidden":""}>
              Please enter your name!
            </div>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>{handleChangeNameError(false); handleChangeName(e);}}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
          <div class="alert alert-danger" role="alert" hidden={ !subjectError ? "hidden":""}>
              Please enter subject!
            </div>
            <Form.Control
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e)=>{handleChangeSubjectError(false); handleChangeSubject(e);}}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <div class="alert alert-danger" role="alert" hidden={ !messageError ? "hidden":""}>
              Please enter message!
            </div>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Message"
              value={message}
              onChange={(e)=>{handleChangeMessageError(false); handleChangeMessage(e);}}
            />
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
