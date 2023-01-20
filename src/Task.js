// import './Task.css';

export default function Task(props) {

    function handleMarkCompleted() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }
    function handleMarkUncomplete() {
        props.updateTaskM(props.index);
    }

    return (
        <div className="task">
            <div className="list">{props.title} </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                {props.completed && <button onClick={handleMarkUncomplete}>Completed</button>}
                {!props.completed && <button  className="markdone"onClick={handleMarkCompleted}>Mark Done</button>}
                <button style={{background: 'red'}} onClick={handleRemoveTask}>Remove Task</button>
            </div>
            
        </div>
    )
}