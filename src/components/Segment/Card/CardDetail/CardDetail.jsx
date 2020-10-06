import React from "react";
import Button from "react-bootstrap/Button";
import "./CardDetail.css";
import Table from "./CardTable";
const CardDetail = (props) => {
  const { data, option = "success", btnText = "BUTTON" } = {
    ...props,
  };
  const getButton = () => {
    if (option === "success") {
      return (
        <>
          <Table option="card-table-success" data={data}/>
          <Button variant="success" className="button-success">
            {btnText}
          </Button>
        </>
      );
    }
    if (option === "secondary") {
      return (
        <>
          <Table option="card-table-secondary" data={data}/>
          <Button variant="secondary" className="button-secondary">
            {btnText}
          </Button>
        </>
      );
    }
    if (option === "danger") {
      return (
        <>
          <Table option="card-table-danger" data={data}/>
          <Button variant="danger" className="button-danger">
            {btnText}
          </Button>
        </>
      );
    }
  };

  return <div className="card-detail-main">{getButton()}</div>;
};

export default CardDetail;
