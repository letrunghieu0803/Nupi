import React from "react";
import { useDispatch } from "react-redux";

import { homePage } from "../../actions";
import { Button, Table } from "react-bootstrap";

function History() {
  const disPatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-start">
        <Button
          className="btn-back"
          onClick={() => {
            disPatch(homePage());
          }}
        >
          Trở về
        </Button>
      </div>
      <div className="d-flex flex-column">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Chế độ chơi</th>
              <th>Ngày chơi</th>
              <th>Level</th>
              <th>Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Định mức 5 Level</td>
              <td>21/1/2021</td>
              <td>2</td>
              <td>55</td>
            </tr>
            <tr>
              <td>Định mức 10 Level</td>
              <td>21/1/2021</td>
              <td>2</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Vô hạn</td>
              <td>21/1/2021</td>
              <td>3</td>
              <td>115</td>
            </tr>
            <tr>
              <td>Vô hạn</td>
              <td>21/1/2021</td>
              <td>2</td>
              <td>45</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default History;
