import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getUserInfo } from "../api";

const Userbar = ({ setIsLoggedIn }) => {
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  function logOut() {
    setIsLoggedIn(false);
    localStorage.clear("token");
  }

  return (
    <div className="ubMaster">
      <div>{myInfo.username} is lookin' good!</div>
      <div className="userbar">
        <Link to="/myroutines"> myROUTINES </Link>
        <Link to="/newactivities"> newACTIVITIES </Link>
        <button onClick={logOut}>LOG OUT!</button>
      </div>
    </div>
  );
};

export default Userbar;
