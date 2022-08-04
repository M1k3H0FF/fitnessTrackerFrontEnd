import React from "react";
import { deleteRoutine } from "../api";
import Routines from "./Routines";

const Delete = ({setShowDelete, routineData} ) => {

    return (
    <div>
        <div>Are you sure you want to delete {routineData.name}</div>
        <button
        onClick={async (event) =>{
            const confirmation = await deleteRoutine(routineData.id)
            setShowDelete(false)
            if (confirmation.success){
                alert(`${confirmation.name} was deleted`);
            }
        }}
        >yup!</button>
        <button
            onClick={(event) => {
                setShowDelete(false);
              }}>
            Sorry, disregard!
        </button>
    </div>
    )
}

export default Delete