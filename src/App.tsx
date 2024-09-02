import AddTask from "./components/AddTask/AddTask.tsx";
import {useState} from "react";
import { TasksContext, TaskType } from "./context/TaskContext.ts"
import Container from "./components/Container/Container.tsx"
import Task from "./components/Task/Task.tsx"

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    return (
        <>
            <h1>Your To Do App</h1>
            <TasksContext.Provider value={{tasks, setTasks}}>
                <AddTask tasks={tasks}/>
                <Container>
                    {tasks.map((task, index) => (
                        <Task text={task.text} key={index}/>
                    ))}
                </Container>
            </TasksContext.Provider>
        </>
    )
}

export default App
