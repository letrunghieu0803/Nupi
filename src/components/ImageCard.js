// import ProgressiveImage from 'react-progressive-image';
import PicOnStage from "./PicOnStage";
// import Loading from './Loading';
import "./style.css";
import dataJson from "../data.json";
import { useSelector } from "react-redux";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
function ImageCard(props) {
  const { urlNow, levelNow, numberQuestion, nameUrlNow } = props;
  const currentView = useSelector((state) => state.changeView);

  const renderAnser = () => {
    return (
      <ButtonGroup size="lg" className="mb-2">
        <Button className="col-12 col-sm-6">
          A. {dataJson[numberQuestion].name}
        </Button>
        <Button className="col-12 col-sm-6 ml-1">
          B. {dataJson[numberQuestion + 1].name}
        </Button>
        <Button className="col-12 col-sm-6 ml-1">
          C. {dataJson[numberQuestion + 2].name}
        </Button>
        <Button className="col-12 col-sm-6 ml-1">
          D. {dataJson[numberQuestion + 3].name}
        </Button>
      </ButtonGroup>
    );
  };
  return (
    <div className="u--fadeInLeft">
      <div className="d-flex justify-content-center">
        <div>LEVEL: {levelNow}</div>
        <div>Ảnh số: {numberQuestion}</div>
      </div>
      <PicOnStage url={urlNow} />
      <div className="d-flex justify-content-center mt-3">
        {currentView == "stage1" ? (
          nameUrlNow
        ) : (
          <div>
            <Button className="col-12 col-sm-6">
              A. {dataJson[numberQuestion].name}
            </Button>
            <Button className="col-12 col-sm-6 ml-sm-1">
              B. {dataJson[numberQuestion - 1].name}
            </Button>
            <Button className="col-12 col-sm-6 ml-sm-1">
              C. {dataJson[numberQuestion + 2].name}
            </Button>
            <Button className="col-12 col-sm-6 ml-sm-1">
              D. {dataJson[numberQuestion + 3].name}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
