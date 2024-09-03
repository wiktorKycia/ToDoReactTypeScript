import {TaskType} from "../../context/TaskContext.ts";

interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {

    let mainContent:JSX.Element = <p>{task}</p>;
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