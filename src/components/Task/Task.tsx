import {TasksContext, TaskType} from "../../context/TaskContext.ts";
import {useContext} from "react";
interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {
    const context = useContext(TasksContext);
    const {tasks, setTasks} = context;
    let mainContent:JSX.Element = <p>{task.text}</p>;
    return (
        <div>
            {mainContent}
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

    )
}