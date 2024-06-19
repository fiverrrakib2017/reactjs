import React from "react";
import { useState } from "react";
import img1 from '../../../public/payel.jpg';
import img2 from '../../../public/rakul.jpg';
const withImageChange =(OriginalComponent)=>{
    return (props) => {
        const [currentImage, setCurrentImage] = useState(img2);

        const changeImage = () => {
            setCurrentImage(prevImage => (prevImage === img2 ? img1 : img2));
        }

        return <OriginalComponent 
                    {...props} 
                    currentImage={currentImage} 
                    changeImage={changeImage} 
                />;
    };
}

export default withImageChange ; 