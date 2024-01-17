import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {users.map((user, index) => {
          return <Card key={index} user={user} />;
        })}
      </div>
    </>
  );
}
