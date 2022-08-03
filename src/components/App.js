import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Activities, Header, Login, MyRoutines, Register, Routines, Userbar, Welcome, NewActivities } from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      {isLoggedIn || token ? (
        <Userbar
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}
      <Routes>
        <Route path={"/"} element={<Welcome />} />;
        <Route path={"/login"} element={<Login setIsLoggedIn={setIsLoggedIn} />} />;
        <Route
          path={"/register"}
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        ;
        <Route path={"/activities"} element={<Activities />} />;
        <Route path={"/routines"} element={<Routines />} />;
        <Route path={"/myroutines"} element={<MyRoutines />} />;
        <Route path={"/newactivities"} element={<NewActivities />} />;
        
      </Routes>
    </div>
  );
};

export default App;
