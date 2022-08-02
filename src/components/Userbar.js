import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";



const Userbar = ({ setIsLoggedIn, setisRegistered })=>{

    function logOut () {
        setIsLoggedIn(false);
        setisRegistered(false);
        localStorage.clear("token")
    }

    return(
        <div className="userbar">
                <Link to="/myroutines"> myROUTINES </Link>
                <Link to="/myactivities"> myACTIVITIES </Link>
                <button onClick={logOut}>LOG OUT!</button>
        
        
        
           
        </div>
    )};
export default Userbar;