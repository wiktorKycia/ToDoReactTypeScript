import {createContext, Dispatch, SetStateAction} from "react";

export interface TaskType {
    text: string
}

// Define the type for the context value, which includes the tasks array and the setTasks function
interface TasksContextType {
    tasks: TaskType[];
    setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

// Create the context with an undefined default value
export const TasksContext = createContext<TasksContextType | undefined>(undefined);
