import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRoutines, updateRoutine } from "../api";

const MyRoutines = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const handleOnChange =(event) => {
    const changed = event.target.name
    if (changed == 'name'){
        setRoutineName(event.target.value)
        console.log(name, 'name')
    }
    if (changed == 'goal') {
        setGoal(event.target.value)
        console.log(goal, "goal")
    }
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const routineInfo = await updateRoutine(name, goal, routineID);
    if(activityInfo && activityInfo.message){
        alert(activityInfo.message)
    }
    setName("");
    setDescription("");
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


  return (
  <div>
    
    As a registered user on the My Routines tab, I want to:
    <li>be shown a form to create a new routine</li>
    <li>the form should have text fields for name and goal
</li>

    <h2>for each routine which is owned by me I should
</h2>
    <li>be able to update the name and goal for the routine
</li>
    <li>be able to delete the entire routine
</li>
    <li>be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
</li>
    <li>be able to update the duration or count of any activity on the routine
</li>
    <li>be able to remove any activity from the routine
</li>
<form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input 
                    name='name'
                    onChange={handleOnChange}
                    placeholder="whatcha up to?"
                    value={name}
                />
                </div>
               
                <div>
                  <label>Goal:  </label>
                <input
                    name='goal'
                    onChange={handleOnChange}
                    placeholder="why?"
                    value={goal}
                />   
                </div>
               <button type="submit">CREATE ROUTINE</button>
            </form>


  </div>
  );
}
export default MyRoutines;
