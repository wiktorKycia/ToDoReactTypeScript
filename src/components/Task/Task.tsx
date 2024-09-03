import {TasksContext, TaskType} from "../../context/TaskContext.ts";
import {useContext, useState, useRef, ReactElement} from "react";
interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {
    const context = useContext(TasksContext);
    const {tasks, setTasks} = context;
    const [this_task, setThisTask] = useState<TaskType>(task);
    const [mainContent, setMainContent] = useRef<ReactElement>(<p>{this_task.text}</p>)

    function handleInputSubmit(){
        setMainContent(<p>{this_task.text}</p>);
    }

    function handleInputChange(){
        setThisTask(mainContent.value);
    }
    function handleEdit(){
        setMainContent(<input type="text" onChange={handleInputChange} value={this_task.text}/>);
        mainContent.addEventListener("keyup", (event) => {
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
                <button>Delete</button>
            </div>
        </div>

    )
}