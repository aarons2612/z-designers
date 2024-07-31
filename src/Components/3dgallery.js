import "./3dgallery.css";

import React, {useState} from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'

import img1 from '../Assets/ser1.jpg';
import img2 from '../Assets/ser2.png';
import img3 from '../Assets/ser3.png';

const images =[img1,img2,img3];

const gallery = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] =useState(0);

  return (
    <div className="gallery">
        {images.map((image, index)=>(
            <img
            key={index}
            src={image}
            alt={'Design ${index + 1}'}
            onClick={()=> {
                setPhotoIndex(index);
                setIsOpen(true);
            }}
            style={{cursor:'pointer',width:'200px',margin:'10px'}}
            />
        ))}
        {isOpen &&(
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) %images.length]}
            prevSrc={images[(photoIndex + images.length -1 )%images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={()=>
                setPhotoIndex((photoIndex +images.length -1)%images.length)
            }
            onMoveNextRequest={()=>
                setPhotoIndex((photoIndex + 1)%images.length)
            }
            toolbarButtons={[
                <a
                key="download"
                href={images[photoIndex]}
                download
                style={{color:"white", textDecoration:"none"}}
                >
                    Download
                </a>
            ]}
            />
        )

        }
    </div>
  )
}

export default gallery