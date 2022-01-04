import React from "react";

const UserForm = () => {
  const formSubmitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" />
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default UserForm;