import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [showValidationDialog, setShowValidationDialog] = useState(false);
  const [validationMessage, setValidationMessage] = useState();

  const formSubmitHandler = event => {
    event.preventDefault();

    if (username === '' || age === '') {
      setValidationMessage("Please enter a valid name and age (non-empty values).");
      setShowValidationDialog(true);
    } else if (age <= 0) {
      setValidationMessage("Please enter a valid age (> 0).");
      setShowValidationDialog(true);
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

  const closeDialog = () => setShowValidationDialog(false);

  const usernameChangeHandler = event => setUsername(event.target.value);
  const ageChangeHandler = event => setAge(event.target.value);

  return (
    <div>
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
      <dialog open={showValidationDialog}>
        <p>{validationMessage}</p>
        <menu>
          <button onClick={closeDialog}>Okay</button>
        </menu>
      </dialog>
    </div>
  );
};

export default UserForm;