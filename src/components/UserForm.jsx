import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const formSubmitHandler = event => {
    event.preventDefault();

    const user = {
      id: Math.random().toString(),
      username: username,
      age: age
    };

    props.onAddUser(user);

    setUsername('');
    setAge('');
  };

  const usernameChangeHandler = event => setUsername(event.target.value);
  const ageChangeHandler = event => setAge(event.target.value);

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          value={age}
          onChange={ageChangeHandler}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;