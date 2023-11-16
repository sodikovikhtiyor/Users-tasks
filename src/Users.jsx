import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <h1>Fetching Users</h1>
      {users.map((user) => {
        return <h2 key={user.id} onClick={() => navigation(`${user.id}`)}>{user.name}</h2>;
      })}
    </div>
  );
}

export default Users;
