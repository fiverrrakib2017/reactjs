import { useEffect, useState } from "react";
import Profile from "./Component/Profile";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        // slice this api 
        const get_user = data.slice(0, 50);
        setUsers(get_user);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
