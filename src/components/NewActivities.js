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
        makeNewActivity(name, description);
        setName("");
        setDescription('');
    };

    return(
      <div>
        <div><h1>Here's the New Activities Page</h1></div>
        <div>we need a new activities form here</div>

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input 
                    onChange={handleOnChange}
                    placeholder="whatcha up to?"
                    value={name}
                />
                </div>
               
                <div>
                  <label>Description:  </label>
                <input
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