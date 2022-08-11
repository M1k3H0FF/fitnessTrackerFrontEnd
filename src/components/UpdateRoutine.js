import React, { useState, useEffect, Fragment } from "react";
import { getAllActivities,updateRoutine, attachActivityToRoutine } from "../api";

const UpdateRoutine = ({ routineData, setIsShown }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [allActivities, setAllActivities] = useState([]);

  useEffect(()=>{
    async function helpGetAllActivities(){
      const activities = await getAllActivities()
      setAllActivities(activities); 
    }
    helpGetAllActivities()}, []

  )
  console.log(allActivities, "hello hello")
  return (
    <div>
      {/* <form onSubmit>
        <label htmlFor="updateRoutine">Update Routine:</label>
        <input />
        <button type="submit">Submit</button>
      </form> */}
        
      <form onSubmit="handleSubmit">
       
          <label htmlFor="selectActivity">
            Activity
          </label>
          <select
            name="activity"
            id="selectActivity"
            value={0}
            onChange={(event) => setAllActivities(event.target.value)}
          > 
            {allActivities.map((activity, idx) => (
              <option key={`${idx}:${activity.name}`} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>
   
        <button type="submit">tack it on</button>
        <button
        onClick={(event) => {
          setIsShown(false);
        }}
      >
        Nevermind
      </button>
      </form>

    </div>
  );
};

export default UpdateRoutine;
