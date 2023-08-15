import { useEffect, useState } from "react"
import Profile from "./Component/Profile";


function App() {
// //declare a state 
// const [users,setUsers]=useState([]);


// //api call with axios
// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res=>res.json())
//   .then(data=>users(data))
// },[]);
const [users,setUsers]=useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
},[]);

  return (
    <div className="container">
      <div className="row">
       
        {/* {
          users.map(user=>{
            <Profile user={user}/>
          })
        } */}

{
                    users.map(user=><Profile user={user}/>)
                }
      </div>
      
    </div>
  )
}

export default App
