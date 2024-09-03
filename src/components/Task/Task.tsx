import {TaskType} from "../../context/TaskContext.ts";

interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType){
    return (
        <div>
            <p>{task}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

    )
}