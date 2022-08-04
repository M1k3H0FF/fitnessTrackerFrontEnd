import React from "react"

import { attachActivityToRoutine } from "../api";

const UpdateRoutine =({routineData, setIsShown}) => {


return(

    <div>
        <h1>Here's the Update individual Routine Page!</h1>

        <div className="userRoutine">
     
        </div>
        <button
            onClick={(event) => {
                setIsShown(false);
              }}>
            NEVERMIND
        </button>     
    </div>
)

}

export default UpdateRoutine;