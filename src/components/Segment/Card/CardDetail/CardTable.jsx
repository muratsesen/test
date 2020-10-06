import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './CardTable.css';

const CardTable = ({option,data}) => {
    return (
        <Table responsive="sm" className={option}>
        <tbody>
          {data.map(item=>{
            return (
              <tr>
            <td>
            <Row>
              <Col><span><img style={{width:"20px", height:"20px"}} src="./images/checked.svg"></img>{"  "}</span>{item.title}</Col>
            </Row>
            {item.subtitle && 
            <Row><Col>{item.subtitle}</Col></Row>}</td>
          </tr>
          
            );
          })}
        </tbody>
      </Table>
  );
};

export default CardTable;
