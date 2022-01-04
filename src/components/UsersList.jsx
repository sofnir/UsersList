import React from "react";

const UsersList = (props) => {
  return (<ul>
    {props.items?.map((item) => {
      return <li key={item.id}>{item.username} ({item.age})</li>;
    })}
  </ul>);
};

export default UsersList;