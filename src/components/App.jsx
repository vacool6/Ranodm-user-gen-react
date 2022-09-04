import React, { useState } from "react";
import Main from "./Main";
import Login from "./Login";

function App() {
  const [isLogedIN, setLogin] = useState(false);
  return <>{isLogedIN ? <Main /> : <Login setLogin={setLogin} />}</>;
}

export default App;
