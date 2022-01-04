import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const formSubmitHandler = event => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
    } else if (+age <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      });
    } else {
      const user = {
        id: Math.random().toString(),
        username: username,
        age: age
      };

      props.onAddUser(user);

      setUsername('');
      setAge('');
    }
  };

  const closeDialog = () => setError(null);

  const usernameChangeHandler = event => setUsername(event.target.value);
  const ageChangeHandler = event => setAge(event.target.value);

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeDialog} />}
    </div>
  );
};

export default UserForm;