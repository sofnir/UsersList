import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const onDeleteHandler = id => props.onDelete(id);

  return (
    <Card className={classes.users}>
      <ul>
        {props.items?.map((item) => {
          return <UserItem
            id={item.id}
            key={item.id}
            username={item.username}
            age={item.age}
            onDelete={onDeleteHandler} />;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;