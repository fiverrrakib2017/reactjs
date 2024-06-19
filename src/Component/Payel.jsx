import React from "react";
import { useState } from "react";
import withImageChange from "./HOC/withImageChange";
const Payel =({ currentImage, changeImage })=>{
    
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


export default withImageChange(Payel) ;