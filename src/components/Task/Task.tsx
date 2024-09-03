import {TasksContext, TaskType} from "../../context/TaskContext.ts";
import {useContext, useState, ReactElement, useRef} from "react";
interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {
    const context = useContext(TasksContext);
    const {tasks, setTasks} = context;
    const [this_task, setThisTask] = useState<TaskType>(task);
    const mainContent= useRef<ReactElement>(<p>{this_task.text}</p>);

    function handleInputSubmit(){
        mainContent.current = <p>{this_task.text}</p>;
    }

    function handleInputChange(){
        setThisTask(mainContent.current.value);
    }
    function handleEdit(){
        mainContent.current = <input type="text" onChange={handleInputChange} value={this_task.text}/>;
        mainContent.current.addEventListener("keyup", (event) => {
            if(event.keyCode === 13){
                handleInputSubmit();
            }
        })
    }

    return (
        <div>
            {mainContent}
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => setTasks(tasks)}>Delete</button>
            </div>
        </div>

    )
}