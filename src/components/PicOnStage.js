import Image from 'react-bootstrap/Image'

const PicOnStage= (url) =>{
    return (
        <div className="pic-on-stage u--fadeInUp">
            <Image className="col-10 col-sm-11 imageMain" src={url.url} ></Image>
        </div>
    )
    
}

export default PicOnStage