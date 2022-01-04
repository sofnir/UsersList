import React from "react";

const UserItem = (props) => {
  const deleteHandler = () => props.onDelete(props.id);

  return (
    <li onClick={deleteHandler}>
      {props.username} ({props.age})
    </li>
  );
};

export default UserItem;