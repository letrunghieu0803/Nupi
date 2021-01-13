import React, { useMemo, useState } from "react";
import "./style.css";
import PicOnStage from "../../../components/PicOnStage";
import { useSelector, useDispatch } from "react-redux";
import { stage2Page } from "../../../actions";



function StageOne() {
  // function picTotal(params) {
  //   let count = 0;
  //   for (let i = 0; i < params; i++) {
  //     count = count + 4;
  //   }
  //   return count;
  // }

  // total ở đây cho biết số bức hình lây ra khi mình chọn được chế độ chơi

  const levelNow = useSelector(state => state.levelNow);
  const disPatch = useDispatch();

  const [urlNow, setUrlNow] = useState();
  const [nameUrlNow, setNameUrlNow] = useState();
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [levelQuestions, setLevelQuestions] = useState(levelNow*4);
  


  console.log(levelQuestions)

  
  const nameAnimals = [
    "cho",
    "meo",
    "lon",
    "ga",
    "ho",
    "bao",
    "cao",
    "chon",
    "huou",
  ];
  const urlAnimals = [
    "https://www.chotot.com/kinhnghiem/wp-content/uploads/2019/02/cho-nhat.jpg",
    "https://image.thanhnien.vn/768/uploaded/minhhung/2019_09_05/r_xvji.jpg",
    "https://photo-cms-plo.zadn.vn/w653/Uploaded/2021/cqjwqcdwp/2014_12_16/ho_fvxa.jpg",
    "https://tophinhanhdep.net/wp-content/uploads/2016/06/hinh-anh-meo-con-10.jpg",
    "https://quachobe.vn/wp-content/uploads/2020/01/con-vat-de-thuong-2.jpg",
    "https://giaydantuonganhtuan.vn/upload_images/images/ANI%20-%20073.jpg",
    "https://mb.dkn.tv/wp-content/uploads/2016/03/629905-650-1454999482-blog_yummypets_chien_heureux_01_14-650x366.jpg",
    "https://baoxaydung.com.vn/stores/news_dataimages/vananh/042016/11/15/152704baoxaydung_image001.jpg",
    "https://kienthuc1805.com/wp-content/uploads/2018/07/1530623044_930_tuyen-tap-hinh-anh-dong-vat-sieu-dang-yeu-dong-vat-780x405.jpg",
  ];
  // Hàm tạo mới danh sách list ảnh để show
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
  
  // Hàm đổi vị trí các phần tử bên trong
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

  // Tạm thời test dữ liệu
    let data = createList(nameAnimals,urlAnimals)


  // useEffect(() => {
  //   if(levelNow > lv){

  //   }
  //   let totalQuestions = levelNow * 4;
  //   setLevelQuestions(totalQuestions);

  // }, [levelNow]);

  useMemo(() => {
    if (numberQuestion > levelQuestions) {
      disPatch(stage2Page())
    }
  }, [numberQuestion]);

  // Hàm nhận list ảnh để hiện thị ra màn hình
  const render = (data) => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
          setUrlNow(data[i].url);
          setNameUrlNow(data[i].name);
          setNumberQuestion(numberQuestion + 1);
        }, 3000);
      }
    }
  };

  render(data)

  return (
    <div>
      <div className="d-flex justify-content-center">LEVEL : {levelNow}</div>
      <PicOnStage url={urlNow} />
      <div className="d-flex justify-content-center mt-3">Con {nameUrlNow}</div>
    </div>
  );
}

export default StageOne;
