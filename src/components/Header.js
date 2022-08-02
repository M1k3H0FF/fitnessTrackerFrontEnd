import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";


const Header = ({ isLoggedIn })=>{

    return(
        <div className="header">
           <Link to="/"><h1>Fitness Tracker</h1></Link>
           <div id="navbar">
                <Link to="/activities"> ACTIVITIES </Link>
                <Link to="/routines"> ROUTINES</Link>
                <Link to="/login"> LOGIN </Link>
                <Link to="/register"> REGISTER </Link>
           
           </div>
 
        </div>
    )};
export default Header;