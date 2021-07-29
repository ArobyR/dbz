import { useEffect, useReducer } from "react";
import LoginRouter from "./routes/LoginRouter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

function App() {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
}

export default App;
