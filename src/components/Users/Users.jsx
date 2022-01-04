import React, { useState } from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => setUsers(previous => [user, ...previous]);
  const onDeleteHandler = id => setUsers(previous => previous.filter(user => user.id !== id));

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList items={users} onDelete={onDeleteHandler} />
    </div>
  );
};

export default Users;