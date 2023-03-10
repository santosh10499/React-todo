import React from "react";
import "./form.css"

export default function CreateTask(props) {

    let [value, setValue] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault(); 
        props.addTask({
            title: value,
            completed: false
        })
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input className="input" value={value} type="text" placeholder="Add a todo" onChange={(e) => setValue(e.target.value)}/>
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}