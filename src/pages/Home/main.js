import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {libraryPage,bxhPage,playPage,historyPage} from '../../actions'

// Chức năng chính là chuyển trang

function Home() {
  const disPatch = useDispatch();
  return (
    <div 
    className="home d-flex flex-column bd-highlight mb-3 justify-content-center justify-items-center"
    
    >
      <Button className="btn-home btn-info  mx-1 mx-sm-5" onClick={()=> {disPatch(playPage())}}>Chơi</Button>
      <Button className='btn-home btn-info mx-1 mx-sm-5' onClick={()=> {disPatch(historyPage())}}>Lịch sử chơi</Button>
      <Button className='btn-home btn-info  mx-1 mx-sm-5' onClick={()=> {disPatch(bxhPage())}}>Bảng xếp hạng</Button>
      <Button className='btn-home btn-info mx-1 mx-sm-5' onClick={()=> {disPatch(libraryPage())}}>Thư viện ảnh</Button>
    </div>
  );
}

export default Home;
