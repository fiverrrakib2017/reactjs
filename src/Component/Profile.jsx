import React from "react";


export default function Profile(props){
  console.log(props.user);
  const {title,thumbnailUrl}=props.user
    return (
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
                <h6>{title}</h6>
            </div>
            <div className="card-body">
               <img src={thumbnailUrl} alt="" />
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add Friend</button>
              
            </div>
          </div>
        </div>
    )
}