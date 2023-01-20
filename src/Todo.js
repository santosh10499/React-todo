import React from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";
// import RemoveAll from "./RemoveAll";

export default function Todo() {
    const [tasks, setTasks] = React.useState([
        {
            title: "Play Cricket",
            completed: true
        },
        {
            title: "Play Some Game",
            completed: false
        }
    ])

    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    }

    function removeTask(index) {
        setTasks(tasks => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    }
    function removeAllTask(index) {
        setTasks(tasks => {
            const newTasks = [...tasks];
            newTasks.splice(index, newTasks.length);
            return newTasks;
        })
    }

    function updateTask(index) {
        
        setTasks(tasks => {
            
            const newTasks = [...tasks];
            newTasks[index].completed = true;

            return newTasks;
        })
    }
    function updateTaskM(index) {
        
        setTasks(tasks => {
            
            const newTasks1 = [...tasks];
            newTasks1[index].completed = false;

            return newTasks1;
        })
    }

    return (
        <div className="todo-container">
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
            </div>
            <div className="pending-todo">
                <h2>Todos</h2>
                {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} updateTaskM={updateTaskM} removeTask={removeTask} className="todo-list"/> )}
            </div>
            {/* <div className="removeAll">
            <RemoveAll removeAllTask={removeAllTask}></RemoveAll>
        </div> */}
        </div>
        
    )
}