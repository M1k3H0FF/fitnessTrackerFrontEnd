import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRoutines } from "../api";

function Routines() {
  const [allRoutines, setAllRoutines] = useState([]);
  
  useEffect(() => {
    fetchAllRoutines()
      .then((routines) => {
        setAllRoutines(routines);
      })
      .catch((error) => {
        console.error(error, "Something broke");
      });
  }, []);

 
  const displayRoutines = allRoutines.map((routine, index) => {
    let routineId = routine.id;
    let routineActivity = routine.activities;
    let routineName = routine.name;
    let routineGoal = routine.goal;
    let routineCreatorId = routine.creatorId;
    let routineCreatorName = routine.creatorName;

    const displayActivities = routineActivity.map((activity) => {
      return  <li>({activity.count}x) {activity.name}: {activity.description}</li>  
    });
   
    return (
      // <div className="masterGrid">
      <div className="userRoutine" key={index}>
        <h2 className="bigboy">{routineName}</h2>
        <div className="goal"><b>Goal: </b>{routineGoal}</div>
        <p>
          <b>Created By: </b>
          {routineCreatorName}
        </p>
        <p>
          <b>Activities:</b>
          {displayActivities}
        </p>
      </div>
      // </div>
    );
  });
  return <div className="masterGrid">{displayRoutines}</div>;
}
export default Routines;
