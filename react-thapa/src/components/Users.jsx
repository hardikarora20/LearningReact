import { useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([
    { name: "hardik", age: 22 },
    { name: "hemant", age: 23 },
    { name: "anshi", age: 21 },
  ]);

  console.log(users);

  return (
    <p>
      {users.map((currUser) => {
        return <p>{currUser.name}</p>;
      })}
    </p>
  );
  //   return <h1>Hey</h1>;
};
