import React from "react";
import withCounter from "./HOC/withCounter";

 const ClickCounter=(props)=>{
    const {count,incrementCount}=props; 
    return(
        <div className="mt-5">
            <button onClick={incrementCount} className="btn btn-primary">Clicked {count} times</button>
        </div>
    )
}
export default withCounter(ClickCounter); 