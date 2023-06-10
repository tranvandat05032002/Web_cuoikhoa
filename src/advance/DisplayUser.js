import React from "react";
import { v4 as uuidV4 } from "uuid";
import withResults from "./withResults";

const DisplayUser = ({ props, results: users }) => {
  return (
    <div>
      {users.map((user) => (
        <span key={uuidV4()}>{user.email}</span>
      ))}
    </div>
  );
};

export default withResults(DisplayUser, "https://randomuser.me/api/");
