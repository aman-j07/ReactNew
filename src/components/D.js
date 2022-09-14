import React from "react";
import { UserConsumer } from "./Context";

function D() {
  return (
    <UserConsumer>
      {username => {
        return <h1>{username}</h1>;
      }}
    </UserConsumer>
  );
}

export default D;
