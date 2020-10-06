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
        <div id="main">
          <div id="table">
            <Table option="card-table-success" data={data} />
          </div>
          <div id="button">
            <Button variant="success" className="button-success">
              {btnText}
            </Button>
          </div>
        </div>
      );
    }
    if (option === "secondary") {
      return (
        <>
          <div id="table">
            <Table option="card-table-secondary" data={data} />
          </div>
          <div id="button">
            <Button variant="secondary" className="button-secondary">
              {btnText}
            </Button>
          </div>
        </>
      );
    }
    if (option === "danger") {
      return (
        <>
          <div id="table">
            <Table option="card-table-danger" data={data} />
          </div>
          <div id="button">
            <Button variant="danger" className="button-danger">
              {btnText}
            </Button>
          </div>
        </>
      );
    }
  };

  return <div className="card-detail-main">{getButton()}</div>;
};

export default CardDetail;
