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
 
    <div><p>we'll need to display the appropriate error message if we get one back from the API call... or the "youre signed up!" if we get that</p>
    <p>maybe also get a handle on the "isLoggedIn" ternary stuff</p></div>
    </div>
  );
};

export default Login;