import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {libraryPage,bxhPage,playPage,historyPage,loginPage} from '../../actions'

// Chức năng chính là chuyển trang

function Home() {
  const disPatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus);

  
  const clickHis = () => {
    if (userStatus) {
      disPatch(historyPage());    
    } else {
      let res = window.confirm("Bạn cần đăng nhập để xem lịch sử");
      if (res == true) {
        disPatch(loginPage());
      }
    }
  };
  
  return (
    <div 
    className="home d-flex flex-column bd-highlight mb-3 justify-content-center justify-items-center"
    
    >
      <Button className="btn-home btn-info  mx-1 mx-sm-5" onClick={()=> {disPatch(playPage())}}>Chơi</Button>
      <Button className='btn-home btn-info mx-1 mx-sm-5' onClick={clickHis}>Lịch sử chơi</Button>
      <Button className='btn-home btn-info  mx-1 mx-sm-5' onClick={()=> {disPatch(bxhPage())}}>Bảng xếp hạng</Button>
      <Button className='btn-home btn-info mx-1 mx-sm-5' onClick={()=> {disPatch(libraryPage())}}>Thư viện ảnh</Button>
    </div>
  );
}

export default Home;
