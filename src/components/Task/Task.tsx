import {TasksContext, TaskType} from "../../context/TaskContext.ts";
import {useContext, useEffect, useRef, useState} from "react";
interface TaskComponentType{
    task: TaskType
}

export default function Task({task}:TaskComponentType) {
    const context = useContext(TasksContext);
    const {tasks, setTasks} = context;
    const [this_task, setThisTask] = useState<TaskType>(task);
    const [mainContent, setMainContent] = useState<React.ReactNode>(<p>{this_task.text}</p>);
    const [inputValue, setInputValue] = useState<string>(this_task.text);

    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleInputSubmit(){
        setMainContent(<p>{this_task.text}</p>);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setInputValue(event.target.value);
        setThisTask({...this_task, text : inputValue});
        handleEdit();
    };
    function handleEdit() {
        setMainContent(
            <input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                ref={inputRef}
            />
        );
    }
    useEffect(() => {
        if (inputRef.current) {
            const handleKeyUp = (event: KeyboardEvent) => {
                if (event.key === "Enter") {
                    handleInputSubmit();
                }
            };

            if ("addEventListener" in inputRef.current) {
                inputRef.current.addEventListener("keyup", handleKeyUp);
            }

            // Cleanup function to remove the event listener when the component unmounts
            return () => {
                if (inputRef.current) {
                    if ("removeEventListener" in inputRef.current) {
                        inputRef.current.removeEventListener("keyup", handleKeyUp);
                    }
                }
            };
        }
    }, [inputRef.current, inputValue]); // Dependencies include the ref and inputValue

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