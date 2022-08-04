import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRoutines, makeNewRoutine, getUserInfo, getRoutinesByUsername} from "../api";

const MyRoutines = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineName, setRoutineName] = useState("");
  const [goal, setGoal] = useState("");
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, [])

  useEffect(() => {
    getRoutinesByUsername(myInfo.username)
      .then((routine) => {
        setMyRoutines(routine);
      })
      .catch((error) => {
        console.error(error, "Something broke");
      });
  }, []);

  const userRoutines = allRoutines.map((routine, index) => {
    let routineId = routine.id;
    let routineActivity = routine.activities;
    let routineName = routine.name;
    let routineGoal = routine.goal;
    let routineCreatorId = routine.creatorId;
    let routineCreatorName = routine.creatorName;

    const displayActivities = routineActivity.map((activity) => {
      return <li>{activity.name}</li>;
    });
   
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


  

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed == "name") {
      setRoutineName(event.target.value);
      console.log(routineName, "name");
    }
    if (changed == "goal") {
      setGoal(event.target.value);
      console.log(goal, "goal");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const routineInfo = await makeNewRoutine(routineName, goal);
    if (routineInfo) {
      alert("NEW ROUTINE CREATED!");
    }
    setRoutineName("");
    setGoal("");
  };

  useEffect(() => {
    fetchAllRoutines()
      .then((routines) => {
        setAllRoutines(routines);
      })
      .catch((error) => {
        console.error(error, "Something broke");
      });
  }, []);

  // these should all say "activity" instead of "routine, I think"
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

  return (
    <div>
      <div className="inspiration">
        <div>Try Something New</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              id="name"
              onChange={handleOnChange}
              placeholder="whatcha up to?"
              value={routineName}
            />
          </div>

          <div>
            <label>Goal: </label>
            <input
              id="goal"
              onChange={handleOnChange}
              placeholder="why?"
              value={goal}
            />
          </div>
          <button type="submit">CREATE ROUTINE</button>
        </form>
      </div>
    </div>
  );
};
export default MyRoutines;
