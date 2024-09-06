import {TasksContext, TaskType} from "../../context/TaskContext.ts";
import {useContext,  useRef, useState} from "react";
interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {
    const context = useContext(TasksContext);
    const {tasks, setTasks} = context;
    const [this_task, setThisTask] = useState<TaskType>(task);

    const [isInput, setIsInput] = useState<boolean>(false);
    const mainContent = useRef(<p>{this_task.text}</p>);

    function handleInputSubmit(){
        setMainContent();
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        handleEdit();
    };
    function handleEdit() {
        mainContent.current = (
            <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                ref={mainContent}
            />
        );
        setIsInput(true);
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