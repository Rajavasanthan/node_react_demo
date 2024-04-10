import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [users, setUsers] = useState([]);
  let getData = async () => {
    let userRes = await axios.get("http://localhost:3000/users");
    setUsers(userRes.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
