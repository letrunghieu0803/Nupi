import Image from 'react-bootstrap/Image'

const PicOnStage= (url) =>{
    return (
        <div className="pic-on-stage">
            <Image className="col-10 col-sm-11" src={url.url} ></Image>
        </div>
    )
    
}

export default PicOnStage