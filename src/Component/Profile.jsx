import React from "react";


export default function Profile(props){
  console.log(props);
    return (
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">
                <h6>Welcome To Profile</h6>
            </div>
            <div className="card-body">
                <h3>Hello</h3>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add Friend</button>
            </div>
          </div>
        </div>
    )
}