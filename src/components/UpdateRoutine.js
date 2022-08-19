import React, { useState, useEffect, Fragment } from "react";
import {
  getAllActivities,
  updateRoutine,
  attachActivityToRoutine,
} from "../api";

const UpdateRoutine = ({ routineData, setIsShown, myRoutines, setMyRoutines }) => {
  console.log(routineData, "here's routineData")
  console.log(myRoutines, "Here's myRoutines")
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [allActivities, setAllActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(()=>{
    allActivities.length ?
    setSelectedActivity(allActivities[0])
    : null
  }, [allActivities])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const routineId = routineData.id
    // const activityId = Number(selectedActivity)
    const count = event.target.count.value
    const duration = event.target.duration.value
    const activityName = allActivities.filter((activity)=>{
      console.log(activity)
      console.log(selectedActivity, "some memorable line of text")
      console.log(activity.id == selectedActivity)
      activity.id == selectedActivity ? true : false  
    })
    console.log(activityName, "cowabunga")
    const updatedRoutine = await attachActivityToRoutine(routineId, activityId, count, duration)

    updatedRoutine.routineActivityId = updatedRoutine.id
    updatedRoutine.id = selectedActivity
    updatedRoutine.description = activityName.description
    updatedRoutine.name = activityName.name

    console.log(updatedRoutine, "line 36")
    const copyOfRoutineData = {...routineData}
    copyOfRoutineData.activities.push(updatedRoutine)
    const copyOfMyRoutines = [...myRoutines]
    const filteredRoutines = copyOfMyRoutines.map((routine)=>{
      if (routine.id == routineId){
        return copyOfRoutineData
      } else {
        return routine;
      }
    })
    setMyRoutines(filteredRoutines)
    console.log(copyOfRoutineData, "copy is here")
// {id: 10625, routineId: 3359, activityId: null, duration: 8, count: 12}

// count: 10
// description: "to shell blooper"
// duration: 9
// id: 120
// name: "Shelling"
// routineActivityId: 10604
// routineId: 3359


    console.log(updatedRoutine, "hello world")

  }

  useEffect(() => {
    async function helpGetAllActivities() {
      const activities = await getAllActivities();
      setAllActivities(activities);
    }
    helpGetAllActivities();
  }, []);


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="selectActivity">Activity</label>
        <select
          name="activity"
          id="selectActivity"
          value={selectedActivity}
          onChange={(event) => setSelectedActivity(event.target.value)}
        >
          {allActivities.map((activity, idx) => (
            <option key={`${idx}:${activity.name}`} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
        <div>
          <input name="count" placeholder="count"></input>
        </div>
        <div>
          <input name="duration" placeholder="duration"></input>
        </div>
          
       <div>
        <button type="submit">tack it on</button>
        <button
          onClick={(event) => {
            setIsShown(false);
          }}
        >
          Nevermind
        </button>
        </div> 
      </form>
    </div>
  );
};

export default UpdateRoutine;
