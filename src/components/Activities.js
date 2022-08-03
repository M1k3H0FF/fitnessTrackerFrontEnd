import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getAllActivities } from "../api";


const Activities = () =>{
const [allActivities, setAllActivities] = useState([]);

    useEffect(() => {
        getAllActivities()
          .then((activities) => {
            setAllActivities(activities);
          })
          .catch((error) => {
            console.error(error, "Something broke");
          });
      }, []);

    const displayActivities = allActivities.map((activity, index) => {
        let activityName = activity.name;
        let activityDescription = activity.description;

        return (
          <div className="userRoutine" key={index}>
            <h2 className="bigboy">{activityName}</h2>
            <div className="goal">{activityDescription}</div>
            <button>Update Activity</button>
          </div>
        );
      });
  
    return(
      <div>
        <div>
            <h1>Here's the Public Activities Page</h1>
        </div>
        <div>
            {displayActivities}
        </div>
      </div>
  
    );
};

export default Activities;