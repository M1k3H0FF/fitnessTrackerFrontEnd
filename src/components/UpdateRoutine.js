import React, { useState, useEffect, Fragment } from "react";
import {
  getAllActivities,
  updateRoutine,
  attachActivityToRoutine,
} from "../api";

const UpdateRoutine = ({ routineData, setIsShown }) => {
  console.log(routineData.id, "Here's a routineId")
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [allActivities, setAllActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const routineId = routineData.id
    const activityId = Number(selectedActivity)
    const count = event.target.count.value
    const duration = event.target.duration.value
  
    await attachActivityToRoutine(routineId, activityId, count, duration)

    window.location.reload(true)
  }

  useEffect(() => {
    async function helpGetAllActivities() {
      const activities = await getAllActivities();
      setAllActivities(activities);
    }
    helpGetAllActivities();
  }, []);


  console.log(selectedActivity, "hello hello");
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
          <input name="count" placeholder="count"></input>
          <input name="duration" placeholder="duration"></input>
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
