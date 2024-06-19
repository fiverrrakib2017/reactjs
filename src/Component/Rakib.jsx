import React from "react";
import img2 from '../../public/rakib.jpg';
import img1 from '../../public/sharuk.jpg';
import { useState } from "react";
const Rakib =()=>{
    const [currentImage, setCurrentImage] = useState(img2);
    const changeImage=()=>{
        setCurrentImage(prevImage => (prevImage === img2 ? img1 : img2));
    }
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h6 className="">Change This Photo</h6>
                </div>
                <div className="card-body">
                    <img className="img-fluid" src={currentImage} alt="" height={100} width={300}/>
                </div>
                <div className="card-footer">
                    <button onClick={changeImage} className="btn btn-success">Change Photo</button>
                </div>
            </div>
        </div>
    )
}


export default Rakib ;