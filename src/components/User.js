import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.allUsers.users);
  const {id,title} = users[0];
  console.log(users);
  return (
    <div className="ui link cards">
    <div className="card">
      <div className="image">
      
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta price">$ </div>
        <div className="meta"></div>
      </div>
    </div>
  </div>
  );
};

export default User;
