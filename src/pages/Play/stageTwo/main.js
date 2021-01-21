import React, { useEffect, useMemo, useState } from "react";
// import PicOnStage from "../../../components/PicOnStage";
import { useDispatch,useSelector } from "react-redux";
import { gameOverPage } from "../../../actions";
import ImageCard from "../../../components/ImageCard";
import Loading from "../../../components/Loading";
import dataJson from "../../../data.json";

function StageTwo() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2100);

    render(dataJson)

  }, []);


  let levelNow = localStorage.getItem("levelNow");
  // total ở đây cho biết số bức hình lây ra khi mình chọn được chế độ chơi
  const [loading, setLoading] = useState(true);
  const disPatch = useDispatch();
  const data = useSelector((state) => state.setDataReduce);

  const [urlNow, setUrlNow] = useState();
  const [nameUrlNow, setNameUrlNow] = useState();
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [levelQuestions] = useState(4);

  const renderImages = () => {
    return (
      <ImageCard
        levelNow={levelNow}
        urlNow={urlNow}
        numberQuestion={numberQuestion}
        nameUrlNow={nameUrlNow}
      />
    );
  };


  const render = (data) => {
    if (data) {
      let number = numberQuestion - 1;
      setUrlNow(data[number].url);
      setNameUrlNow(data[number].name);
      setTimeout(() => {
        setNumberQuestion(numberQuestion + 1);
      }, 4000);
    }
  };
  useMemo(() => {
    if (numberQuestion <= levelQuestions && loading == false) {
      render(dataJson);
      return () => {
        clearTimeout();
      };
    }
  }, [numberQuestion]);

  useEffect(() => {
    if (numberQuestion > levelQuestions) {
      disPatch(gameOverPage());
    }
  }, [numberQuestion]);

  return (
    <div>
      {loading ? <Loading /> : null}
      {loading === false ? renderImages() : null}
    </div>
  );
}
export default StageTwo;
