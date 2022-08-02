import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Routines,} from "./";



const App = () => {
  return (
    <div>
      <Routines />
      <Routes>
        <Route path="/" element={<Routines />} />
      </Routes>
  </div>
  );
};

export default App;
