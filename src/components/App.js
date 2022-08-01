import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fectchAllRoutines } from "../api";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

useEffect(() => {
  fectchAllRoutines()
    .then((routines) => {
      setAllPosts(posts);
    })
    .catch((error) => {
      console.error(error, "Something broke");
    });
}, []);

export default App;
