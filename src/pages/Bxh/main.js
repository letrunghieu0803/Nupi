import React from "react";
import { useDispatch } from "react-redux";
import { homePage } from "../../actions";
import { Button, Table } from "react-bootstrap";
import "./style.css"
// Chức năng chính là tổng hợp và xếp hạng điểm của người chơi

function Bxh() {
  const disPatch = useDispatch();

  return (
    <div className="u--fadeInLeft nowrap">
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
              <th>Hạng</th>
              <th>Người chơi</th>
              <th>Level</th>
              <th>Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-2">1</td>
              <td className="col-6">letrunghieu08031998@gmail.com</td>
              <td className="col-2">3</td>
              <td className="col-2">115</td>
            </tr>
            <tr>
              <td className="col-2">2</td>
              <td className="col-6">letrunghieu08031998@gmail.com</td>
              <td className="col-2">2</td>
              <td className="col-2">45</td>
            </tr>
            <tr>
              <td className="col-2">3</td>
              <td className="col-6">hieukusanagi9x@gmail.com</td>
              <td className="col-2">1</td>
              <td className="col-2">15</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Bxh;
