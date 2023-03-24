import React, { useEffect, useState } from "react";
import Main from "./Main";
import Login from "./Login";

function App() {
  const [isLoggedIN, setLogin] = useState("");

  useEffect(() => {
    setLogin(localStorage.getItem("user"));
  }, [isLoggedIN]);
  return <>{isLoggedIN ? <Main /> : <Login setLogin={setLogin} />}</>;
}

export default App;
