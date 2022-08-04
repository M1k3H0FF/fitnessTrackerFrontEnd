import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchAllRoutines,
  makeNewRoutine,
  getUserInfo,
  getRoutinesByUsername,
} from "../api";
import {Delete} from "./";

const MyRoutines = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineName, setRoutineName] = useState("");
  const [goal, setGoal] = useState("");
  const [myInfo, setMyInfo] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [showDelete, setShowDelete] = useState(false)
  const [clickID,setClickID] = useState("")
  const [routineData, setRoutineData] = useState({})


  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  useEffect(() => {
    async function getMyRoutineList() {
      const myRoutineList = await getRoutinesByUsername(myInfo.username);
      setMyRoutines(myRoutineList);
    }
    getMyRoutineList();
  }, [myInfo]);

  console.log(myRoutines, "cowabunga!");

  // Stuff for the "make new routine" form

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

  // Here's the Return that displays on the site
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

      {/* Here's the map of my routines */}
    <div className="inspiration2">Your Personal Routines Are Below!</div>
    <div className="inspiration2">Please remember:</div> <div className="inspiration2">Success is obedience to a structured way of life.</div>
      {myRoutines.length > 0 ? (
        <>
          {myRoutines.map((routine, index) => {
            return (
              <div className="userRoutine" key={index}>
                <div>
                  <h2>{routine.name}</h2>
                </div>
                <div className="goal">{routine.goal}</div>
                <p>
                  <b>Activities:</b>
                </p>

                <div className="userRoutineOptions">
                  <button
                    onClick={(event) => {
                      setIsShown(true);
                      setClickID(`${routine.id}`);
                    }}
                  >
                    Update Routine
                  </button>

                  <button
                    onClick={(event) => {
                      setShowDelete(true);
                      setClickID(`${routine.id}`);
                      setRoutineData(routine);
                    }}
                  >
                    Delete Routine
                  </button>
                </div>
                <div>
                <div>
                {showDelete && clickID === `${routine.id}` ?
                <Delete setShowDelete={setShowDelete} routineData={routineData}/> :null}
              </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}


    </div>
  );
};

export default MyRoutines;
