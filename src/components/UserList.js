import React from "react";
import UserDescription from "./UserDescription";
import Card from "./Card";

function UserList(props) {
  let output = "no users";

  if (props.userList.length > 0) {
    output = props.userList.map((item) => {
      item.key = Math.random().toString();
      return (
        <UserDescription
          key={item.key}
          value={`${item.userName} (${item.userAge} years old)`}
        />
      );
    });
  }

  return (
    <Card>
      <div>{output}</div>
    </Card>
  );
}

export default UserList;
