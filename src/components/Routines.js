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

  //   console.log(allRoutines, "line 19");
  const displayRoutines = allRoutines.map((routine, index) => {
    let routineId = routine.id;
    let routineActivity = routine.activities;
    let routineName = routine.name;
    let routineGoal = routine.goal;
    let routineCreatorId = routine.creatorId;
    let routineCreatorName = routine.creatorName;
    //   console.log(routineActivity, 'line 26')
    const displayActivities = routineActivity.map((activity) => {
      return <li>{activity.name}</li>;
    });
    console.log(routineActivity, "line29");
    return (
      <div className="userRoutine" key={index}>
        <h2 className="bigboy">{routineName}</h2>
        <div className="goal">{routineGoal}</div>
        <p>
          <b>Created By:</b>
          {routineCreatorName}
        </p>
        <p>
          <b>Activity:</b>
          {displayActivities}
        </p>
      </div>
    );
  });
  return <div>{displayRoutines}</div>;
}
export default Routines;
