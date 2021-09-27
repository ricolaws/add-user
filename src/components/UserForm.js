import Card from "./Card";
import Button from "./Button";
import React, { useState } from "react";

function UserForm(props) {
  const [userInput, setUserInput] = useState({
    userName: "",
    userAge: "",
    key: "",
  });

  function nameChangeHandler(event) {
    event.preventDefault();
    setUserInput({
      ...userInput,
      userName: event.target.value,
    });
  }

  function ageChangeHandler(event) {
    event.preventDefault();
    setUserInput({
      ...userInput,
      userAge: event.target.value,
    });
  }

  // ***  *** Form Logic ***  ***
  function submitHandler(event) {
    event.preventDefault();
    userInput.userAge = parseInt(userInput.userAge, 10);
    if (userInput.userName === "" || userInput.userAge === "") {
      props.errorHandler(1);
      setUserInput({
        ...userInput,
        userAge: "",
      });
    } else if (isNaN(userInput.userAge) || userInput.userAge <= 0) {
      props.errorHandler(2);
      setUserInput({
        ...userInput,
        userAge: "",
      });
    } else {
      props.addUserHandler(userInput);
      setUserInput({
        userName: "",
        userAge: "",
      });
      props.errorHandler(0);
    }
  }

  return (
    <Card>
      <form className="user-form" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          value={userInput.userName}
          type="text"
          onChange={nameChangeHandler}
        ></input>
        <label>Age (years)</label>
        <input
          value={userInput.userAge}
          type="text"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default UserForm;
