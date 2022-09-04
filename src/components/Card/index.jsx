import React from "react";
import classes from "./style.module.css";

const Card = (props) => {
  const { email, cell, pic, name, setList, userList, isPro } = props;

  const deleteHandler = (value) => {
    setList(userList.filter((user) => user.name !== value));
    console.log(userList);
  };
  return (
    <div className={isPro ? classes.pro : classes.card}>
      <div className={classes.left}>
        <h1>{name}</h1>
        <button onClick={() => deleteHandler(name)}>Delete contact?</button>
        <div className={classes.contact}>
          <p>{cell}</p>
        </div>
        <div className={classes.contact}>
          <p>{email}</p>
        </div>
        <div className={classes.contact}>
          <p>123 Anywhere St, Somewhere</p>
        </div>
      </div>

      <div className={classes.right}>
        <img src={pic} alt="random pic" />
      </div>
    </div>
  );
};

export default Card;
