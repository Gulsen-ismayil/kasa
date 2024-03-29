import { useEffect, useState } from "react";
import axios from "axios";
import UserName from "./componants/UserName/UserName";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/18")
      .then((response) => setUser(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <UserName user={user} />
    </div>
  );
}

export default App;
