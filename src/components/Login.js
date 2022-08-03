import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { loginUser } from "../api";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("i am submitting");
    const loginInfo = await loginUser (username, password);
    if(loginInfo && loginInfo.message){
        alert(loginInfo.message)
    }
    console.log(loginInfo);
    localStorage.setItem("token", loginInfo.token);
    setIsLoggedIn(true)
    setUsername("");
    setPassword("");
  };

  return (
    <div className="logAndRegUser">
   <p>TODAY, YOUR FITNESS JOURNEY CONTINUES!</p>
    <form className="logIn" onSubmit={handleSubmit}>
      <div>
          <label>
            USER NAME:   
            <input
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                console.log(username);
              }}
            />
          </label>
    </div>
    <div>   
        <label>
            password: 
            <input
              name="password"
              type="text"
              value={password}
              onChange={(event) => {
                console.log(event.target.value);
                setPassword(event.target.value);
              }}
            />
        </label>
    </div>
    <button type="submit">Submit</button>
    </form>

    </div>
  );
};

export default Login;