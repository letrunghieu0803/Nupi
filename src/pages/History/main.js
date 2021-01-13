import React from "react";
import { useDispatch } from "react-redux";

import { homePage } from "../../actions";
import { Button, Table } from "react-bootstrap";

function History() {
  const disPatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-end">
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
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default History;
