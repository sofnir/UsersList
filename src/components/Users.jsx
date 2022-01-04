import React, { useState } from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => setUsers(previous => [user, ...previous]);

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList items={users} />
    </div>
  );
};

export default Users;