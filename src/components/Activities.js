import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getAllActivities, updateActivity } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleOnChange = (event) => {
    const changed = event.target.name;
    if (changed == "name") {
      setName(event.target.value);
      console.log(name, "name");
    }
    if (changed == "description") {
      setDescription(event.target.value);
      console.log(description, "description");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const act_ID = event.target.dataset.activity;
    const updatedActivity = await updateActivity(name, description, act_ID);
    const newActivityList = allActivities.map((activity) => {
      if (activity.id == act_ID) {
        return updatedActivity;
      } else {
        return activity;
      }
    });
    if (updatedActivity.id){
      setAllActivities(newActivityList)
    }else {
      alert(updatedActivity.name)
    }
    setName("");
    setDescription("");
  };
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
        <span>
          <form onSubmit={handleSubmit} data-activity={activity.id}>
            <div className="innerHeading"><label htmlFor="updateActivity">Update Activity:</label></div>
            <div>
              <label>New Name: </label>
            <input
              onChange={handleOnChange}
              className="updateName"
              type="text"
              required
              name="name"
              placeholder={activityName}
            />
            </div>
            <div>
            <label>New Description: </label>
            <input
              onChange={handleOnChange}
              className="updateDescriptioin"
              type="text"
              required
              name="description"
              placeholder={activityDescription}
            />
            <div>   <button name="Submit" type="submit">
              Update
            </button></div>
         
            </div>
          </form>
        </span>
      </div>
    );
  });

  return (
    <div>
      <div className = "inspiration3">
        Public Activities
      </div>
      <div className="masterGrid">{displayActivities}</div>
    </div>
  );
};

export default Activities;
