import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchAllRoutines } from "../api";

const App = () => {
const [allRoutines, setAllRoutines] = useState([])
  


useEffect(() => {
  fetchAllRoutines()
    .then((routines) => {
      setAllRoutines(routines);
    })
    .catch((error) => {
      console.error(error, "Something broke");
    });
}, []); 
console.log(allRoutines, 'line 19')
};
export default App;
