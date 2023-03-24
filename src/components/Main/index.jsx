import React, { useState } from "react";
import classes from "./style.module.css";
import Card from "../Card";
import Popup from "../Popup";

const Main = () => {
  const [userList, setList] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [popup, setPopup] = useState("");
  const [isPro, setPro] = useState(false);

  const clickHandler = async () => {
    try {
      if (userList.length > 4 && !isPro) {
        setPopup(classes.popup);
        setTrigger(true);
      } else {
        const data = await fetch("https://randomuser.me/api/");
        const result = await data.json();
        setList([
          ...userList,
          {
            email: result.results[0].email,
            cell: result.results[0].phone,
            pic: result.results[0].picture.large,
            name: result.results[0].name.first,
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>Random user generated ({userList.length})</h1>
          <button className={classes.btn} onClick={clickHandler}>
            Generate!
          </button>
          <button className={classes.logoutBtn} onClick={logoutHandler}>
            Logout
          </button>
        </div>
        <div className={classes.flexbox}>
          {userList.map((user) => (
            <Card
              key={user.name}
              email={user.email}
              cell={user.cell}
              pic={user.pic}
              name={user.name}
              userList={userList}
              setList={setList}
              isPro={isPro}
            />
          ))}
        </div>
      </div>
      <div className={popup}>
        <Popup
          trigger={trigger}
          setTrigger={setTrigger}
          setPopup={setPopup}
          setPro={setPro}
          isPro={isPro}
        />
      </div>
    </>
  );
};

export default Main;
