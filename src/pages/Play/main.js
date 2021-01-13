import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { homePage } from "../../actions";

import "./style.css";

// Chức năng chọn chế độ và số lượng ng chơi

function Play() {
  const disPatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-end ">
        <Button
          className="btn-back"
          onClick={() => {
            disPatch(homePage());
          }}
        >
          Trở về
        </Button>
      </div>
      <div id="items-play" className="d-flex flex-column justify-content-center justify-items-center align-items-center" >
        <Button id="btn-nolimit" className="btn-success">Chế độ vô hạn</Button>
        <Dropdown id="dropdown-play">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Chế độ định mức
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-success">
            <Dropdown.Item href="#/action-1" className="bg-info">
              10 Level
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="bg-warning">
              20 Level
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="bg-danger">
              30 Level
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Play;
