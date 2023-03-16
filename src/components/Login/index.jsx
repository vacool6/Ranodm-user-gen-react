import React, { useState } from "react";
import classes from "./style.module.css";

const Login = (props) => {
  const { setLogin } = props;
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const loginHandler = () => {
    if (username && password) {
      setLogin(localStorage.setItem("user", username));
    }
  };
  return (
    <>
      <h2 className={classes.heading}>
        Welcome to random user generator
        <p>Please SignIN to continue</p>
      </h2>
      <div className={classes.container}>
        <form className={classes.formLayout} onSubmit={submitHandler}>
          <h2>SignIN to continue</h2>
          <input
            className={classes.input}
            type="email"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className={classes.input}
            type="password"
            required
            minLength={5}
            maxLength={10}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className={classes.btn} onClick={loginHandler}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
