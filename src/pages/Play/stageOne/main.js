import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
// import PicOnStage from "../../../components/PicOnStage";
import { useDispatch,useSelector } from "react-redux";
import { stage2Page } from "../../../actions";
import ImageCard from "../../../components/ImageCard";
import Loading from "../../../components/Loading";
import dataJson from "../../../data.json";
import {setDataReduce} from "../../../actions"
function StageOne() {
  useEffect(async () => {
    setTimeout(() => {
      setLoading(false);
      setAnswerMode(false);
    }, 2100);
  render(dataJson)
  }, []);
// useMemo(()=>{
//   disPatch(setDataReduce(data))
// },[data])

  let levelNow = localStorage.getItem("levelNow");
  // total ở đây cho biết số bức hình lây ra khi mình chọn được chế độ chơi
  const [loading, setLoading] = useState(true);
  const disPatch = useDispatch();
  const [answerMode, setAnswerMode] = useState(true);
  const [dataName, setDataName] = useState();
  const [dataUrl, setDataUrl] = useState();
  const data = useSelector(state => state.setDataReduce);
  
  const [urlNow, setUrlNow] = useState();
  const [nameUrlNow, setNameUrlNow] = useState();
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [levelQuestions] = useState(4);
  
  // Lay data 1 lan duy nhat
  
  // console.log(answerMode);
  // console.log(numberQuestion);
  // console.log(levelQuestions);


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

  console.log(dataName);
  console.log(data)

  function convertArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function createList(array1, array2) {
    let listData = [];
    let newArray = convertArray(array1);
    for (let i = 0; i < newArray.length; i++) {
      let dataObj = {};
      dataObj.name = newArray[i];
      dataObj.url = array2[i];
      listData.push(dataObj);
    }
    return listData;
  }

  const cupData = (dataJson) => {
    let dataName = [];
    let dataUrl = []
    for (let i = 0; i < dataJson.length; i++) {
      let newName, newUrl;
      newName = dataJson[i].name;
      newUrl = dataJson[i].url;
      dataName = [...dataName, newName];
      dataUrl = [...dataUrl, newUrl]
      }
    setDataName(dataName)
    setDataUrl(dataUrl)
    let dataConvert = createList(dataName,dataUrl)
    disPatch(setDataReduce(dataConvert))
    }
  
    
  

  // Hàm tạo mới danh sách list ảnh để show

  // Hàm đổi vị trí các phần tử bên trong

  // Tạm thời test dữ liệu

  // Hàm nhận list ảnh để hiện thị ra màn hình
  const render = (data) => {
    if (data) {
      console.log("vao day")
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
      disPatch(stage2Page());
    }
  }, [numberQuestion]);

  return (
    <div>
      {loading ? <Loading /> : null}
      {answerMode === false && loading === false ? renderImages() : null}
    </div>
  );
}

export default StageOne;
