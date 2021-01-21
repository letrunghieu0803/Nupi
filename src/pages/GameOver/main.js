import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginPage, homePage } from "../../actions";

function GameOver() {
  const userStatus = useSelector((state) => state.userStatus);
  const dispatch = useDispatch();
  const [saveStatus, setSaveStatus] = useState(false)
  const clickSave = () => {
    if (userStatus) {
        setSaveStatus(true)
      let res = window.confirm("Bạn đã lưu điểm thành công!");
      if (res == true) {
        dispatch(homePage());
      }
    } else {
      let res = window.confirm("Bạn cần đăng nhập để lưu điểm!");
      if (res == true) {
        dispatch(loginPage());
      }
    }
  };

  const clickBack = ()=>{
    if(saveStatus){
        dispatch(homePage())
    } else{
      let res = window.confirm("Bạn có muốn thoát khi chưa lưu điểm?");
      if (res == true) {
        dispatch(homePage());
      }
    }
  }
  return (
    <div className="u--fadeInLeft h-75 p-3 d-flex flex-column justify-content-center">
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <span className="mb-3">Thành tích của bạn:</span>
          <span className="mb-3">Chế độ: Đinh mức 5 Level</span>
          <span className="mb-3">Đạt: Level 2, 7 câu đúng</span>
          <span className="mb-3">Tổng điểm: 55 Điểm</span>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="fit-content d-inline-block" onClick={clickSave}>
            Lưu điểm
          </Button>
          <Button className="fit-content d-inline-block" onClick={clickBack}>Trở về</Button>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
