import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { makeNewActivity } from "../api";

const NewActivities = () =>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const handleOnChange =(event) => {
        const changed = event.target.id
        if (changed === 'name'){
            setName(event.target.value)
            console.log(name, 'name')
        }
        if (changed === 'description') {
            setDescription(event.target.value)
            console.log(description, "description")
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const activityInfo = await makeNewActivity(name, description);
        if(activityInfo && activityInfo.message){
            alert(activityInfo.message)
        }
        setName("");
        setDescription('');
    };

    return(
      <div>
        <div className="inspiration3">Make a New Activity!</div>

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input 
                    id='name'
                    onChange={handleOnChange}
                    placeholder="whatcha up to?"
                    value={name}
                />
                </div>
               
                <div>
                  <label>Description:  </label>
                <input
                    id='description'
                    onChange={handleOnChange}
                    placeholder="what's that?"
                    value={description}
                />   
                </div>
               <button type="submit">CREATE ACTIVITY</button>
            </form>
        </div>

      </div>
    )

};
export default NewActivities;