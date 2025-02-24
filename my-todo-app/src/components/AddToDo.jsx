import React, { useState } from "react";

function AddToDo({formData, onFormSubmit, confirmation}) {

    const [localFormData, setLocalFormData] = useState(formData);
    function handleSubmit(e) {
        e.preventDefault();
        onFormSubmit(e, localFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLocalFormData({
            ...localFormData,
            [name]: value
        });
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New TO Do: </label>
            <input type="text" id="name" name="name" value={localFormData.name} onChange={handleChange} required />
                        <button type="submit">Submit</button>
        </form>
        { confirmation ?
            <p>{confirmation}</p> : ""
        }
    
        </>
    )
}

export default AddToDo;