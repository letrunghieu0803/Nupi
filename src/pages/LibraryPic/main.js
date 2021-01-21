import React from "react";
import { useDispatch } from "react-redux";

import { homePage } from "../../actions";
import { Button, Image, Row, Col } from "react-bootstrap";
import dataJson from "../../data.json"
import "./style.css"
// Chức năng show màn ảnh các con vật được sưu tầm

function Library() {
  const disPatch = useDispatch();

  return (
    <div className="main-library">
      <div className="d-flex justify-content-start">
        <Button
          className="btn-back "
          onClick={() => {
            disPatch(homePage());
          }}
        >
          Trở về
        </Button>
      </div>
      <div className="d-flex flex-column nowrap">
        <div>
        <Image className="col-12 col-sm-6 col-md-4 image-library" src={dataJson[0].url} rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[1].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[2].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library" src={dataJson[3].url} rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[4].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[5].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[6].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[7].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[8].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[9].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[10].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[12].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[13].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[14].url}  rounded />
            <Image className="col-12 col-sm-6 col-md-4 image-library"  src={dataJson[15].url}  rounded />

        </div>
            
      </div>
    </div>
  );
}

export default Library;
