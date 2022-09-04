import React from "react";
import classes from "./style.module.css";

const Popup = (props) => {
  const { trigger, setTrigger, setPopup, setPro, isPro } = props;

  const notSubbed = () => {
    setTrigger(false);
    setPopup("");
  };
  const subbed = () => {
    setPro(true);
    setTimeout(() => {
      setTrigger(false);
      setPopup("");
    }, 3000);
  };

  return (
    trigger && (
      <>
        <div className={classes.container}>
          <div className={classes.main}>
            {!isPro ? (
              <>
                <h4>Subscribe to PRO to enjoy unlimited generations.</h4>
                <div className={classes.btnContainer}>
                  <button onClick={notSubbed}>May be later</button>
                  <button onClick={subbed}>Sub to PRO</button>
                </div>
              </>
            ) : (
              <div className={classes.pro}>
                <h4>
                  Congratulations!
                  <br /> You are now a PRO member.
                </h4>
                <img
                  src="https://cdn5.vectorstock.com/i/1000x1000/30/64/crown-king-icon-flat-style-vector-22693064.jpg"
                  alt="Pro"
                />
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Popup;
