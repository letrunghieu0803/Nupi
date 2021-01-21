import Home from "./pages/Home/main";
import Play from "./pages/Play/main";
import Bxh from "./pages/Bxh/main";
import History from "./pages/History/main";
import Library from "./pages/LibraryPic/main";
import Stage1 from "./pages/Play/stageOne/main";
import Stage2 from "./pages/Play/stageTwo/main";
import Login from "./pages/Login/main"
import GameOver from "./pages/GameOver/main"


// import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import AuthLayOut from "./components/LayOut/AuthLayOut";

import "./App.css";

export default function App() {
  
  const currentView = useSelector(state => state.changeView);
  console.log(currentView);
  return (
    <div className="App col-12 col-sm-11 col-md-9 container pd-10 d-flex flex-column bd-highlight mb-3">
      <AuthLayOut />
      {currentView === "home" ? <Home /> : null}
      {currentView === "play" ? <Play /> : null}
      {currentView === "bxh" ? <Bxh /> : null}
      {currentView === "history" ? <History /> : null}
      {currentView === "library" ? <Library /> : null}
      {currentView === "stage1" ? <Stage1 /> : null}
      {currentView === "stage2" ? <Stage2 /> : null}
      {currentView === "login" ? <Login /> : null}
      {currentView === "gameover" ? <GameOver /> : null}
    </div>
  );
}
 