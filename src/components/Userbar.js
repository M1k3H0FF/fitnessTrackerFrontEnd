import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Userbar = ({ setIsLoggedIn }) => {
  function logOut() {
    setIsLoggedIn(false);
    localStorage.clear("token");
  }

  return (
    <div className="userbar">
      <Link to="/myroutines"> myROUTINES </Link>
      <Link to="/newactivities"> newACTIVITIES </Link>
      <button onClick={logOut}>LOG OUT!</button>
    </div>
  );
};
export default Userbar;
