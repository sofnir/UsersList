import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  const onDeleteHandler = id => props.onDelete(id);

  return (<ul>
    {props.items?.map((item) => {
      return <UserItem
        id={item.id}
        key={item.id}
        username={item.username}
        age={item.age}
        onDelete={onDeleteHandler} />;
    })}
  </ul>);
};

export default UsersList;