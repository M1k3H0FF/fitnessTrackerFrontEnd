import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchAllRoutines } from "../api";
import { Routines } from "./";

const App = () => {
  return(
    <div>
<Routes>
  <Route path={'/login'}
  />;

  <Route path={'/register'}
  
  />;


    <Route
  path={'/routines'}
  element={<Routines />}/>

  </Routes>
  </div>
  )
};

export default App;
