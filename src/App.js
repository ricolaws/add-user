import React, { useState } from "react";
import Modal from "./components/Modal.js";
import UserForm from "./components/UserForm.js";
import UserList from "./components/UserList.js";
import DarkMode from "./components/DarkMode.js";
import "./index.css";

function App() {
  const [newUser, setNewUser] = useState("{}");
  const [userList, setUserList] = useState([]);
  const [errorState, setErrorState] = useState(0);

  const addUserHandler = (user) => {
    setNewUser(user);
    console.log(user);
    setUserList((existingUsers) => {
      console.log(existingUsers);
      return [user, ...existingUsers];
    });
  };

  const errorHandler = (condition) => {
    setErrorState(condition);
  };

  return (
    <div className="container">
      <header className="main-header">
        <DarkMode />
        <h1>user club</h1>
      </header>
      <Modal errorState={errorState} onClose={() => errorHandler(0)} />
      <UserForm
        setNewUser={setNewUser}
        addUserHandler={addUserHandler}
        errorHandler={errorHandler}
      />
      <UserList newUser={newUser} userList={userList} />
    </div>
  );
}

export default App;
