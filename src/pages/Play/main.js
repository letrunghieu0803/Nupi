import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { homePage , stage1Page } from "../../actions";

import "./style.css";

// Chức năng chọn chế độ và số lượng ng chơi

function Play() {
  const disPatch = useDispatch();
  const setLevelMax =(event)=>{
      let text = event.target.innerHTML
      console.log(text)
      let levelMax
      if(text == "Chế độ vô hạn"){
        levelMax = 25
      } else {
        let value = text.slice(0,2)
        levelMax = Number(value)
      }
    
      
      // if(levelMax=="Chế độ vô hạn"){
      // localStorage.setItem('levelMax', 25)
      console.log(event)

      // }
      localStorage.setItem("levelNow", 1)
      localStorage.setItem("modePlay", text)
      localStorage.setItem('levelMax', levelMax)
      setTimeout(()=>{
        disPatch(stage1Page())
      },500)
      return clearTimeout()
  }

  return (
    <div>
      <div className="d-flex justify-content-start ">
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
        <Button id="btn-nolimit" className="btn-success" value ="25" onClick={setLevelMax}>
          Chế độ vô hạn
          </Button>
        <Dropdown id="dropdown-play">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Chế độ định mức
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-success">
            <Dropdown.Item href="#/action-1" className="bg-info" value ="5" onClick={setLevelMax}>
              5 Level
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="bg-warning" value ="10" onClick={setLevelMax}>
              10 Level
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="bg-danger" value ="15" onClick={setLevelMax}>
              15 Level
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Play;
