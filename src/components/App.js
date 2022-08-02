import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Activities, Header, Login, Register, Routines, Userbar, Welcome } from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    const checktoken = localStorage.getItem("token");
    if (checktoken) {
      setToken(checktoken);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header />
      {isLoggedIn || isRegistered && token ? (
        <Userbar
          setIsLoggedIn={setIsLoggedIn}
          setisRegistered={setIsRegistered}
        />
      ) : null}
      <Routes>
        <Route path={"/"} element={<Welcome />} />;
        <Route path={"/login"} element={<Login />} />;
        <Route
          path={"/register"}
          element={<Register setIsRegistered={setIsRegistered} />}
        />
        ;
        <Route path={"/activities"} element={<Activities />} />;
        <Route path={"/routines"} element={<Routines />} />;
      </Routes>
    </div>
  );
};

export default App;
