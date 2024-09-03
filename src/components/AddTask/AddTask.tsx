import * as React from "react";
import {ChangeEvent, useState, useContext} from "react";
import { TasksContext } from "../../context/TaskContext.ts"; // Adjust the path as needed

// interface AddTaskType {
//     tasks: object[];
// }
export default function AddTask(){
    const context = useContext(TasksContext);
    const { tasks, setTasks } = context;
    const [taskName, setTaskName] = useState<string>("");

    function handleTaskNameChange(event:React.ChangeEvent<HTMLInputElement>)
    {
        setTaskName(event.target.value);
    }

    function handleAddTask(){
        console.log(tasks);
        setTasks(t => [...t, {id: t[t.length-1].id+1, text: taskName}]);
        console.log(tasks);
    }

    return(
        <div>
            <input type="text" value={taskName} onChange={(event:ChangeEvent<HTMLInputElement>) => handleTaskNameChange(event)}/>
            <button onClick={handleAddTask}>Add task</button>
        </div>
    )
}