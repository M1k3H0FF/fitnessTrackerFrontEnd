import React, { useState, useEffect, Fragment } from "react";
import { getAllActivities,updateRoutine, attachActivityToRoutine } from "../api";

const UpdateRoutine = ({ routineData, setIsShown }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [allActivities, setAllActivities] = useState([]);
  return (
    <div>
      <form onSubmit>
        <label htmlFor="updateRoutine">Update Routine:</label>
        <input />
        <button type="submit">Submit</button>
      </form>
        
      <form onSubmit="handleSubmit">
        <fieldset>
          <label htmlFor="selectActivity">
            Activity <span className="selectActivity">({allActivities})</span>
          </label>
          <select
            name="activity"
            id="selectActivity"
            value={activity}
            onChange={(event) => setAllActivities(event.target.value)}
          > 
            {getAllActivities.map((activity, idx) => (
              <option key={`${idx}:${activity.name}`} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit">Search</button>
      </form>
      <button
        onClick={(event) => {
          setIsShown(false);
        }}
      >
        Nevermind
      </button>
    </div>
  );
};

export default UpdateRoutine;
