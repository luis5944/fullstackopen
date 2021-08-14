import React from "react";
import "./newperson.css";

const Notification = ({ notification }) => {
 
  return (
    <div className={notification.type}>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;
