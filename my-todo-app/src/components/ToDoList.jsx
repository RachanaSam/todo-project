import React from "react";

function ToDoList({formData}) {
    if(!formData.name) {
        return <p>No data...</p>;
    } else {
        return (
            <div>
                <p>New TO Do: {formData.name}</p>
               
            </div>
        )
    }
}

export default ToDoList;