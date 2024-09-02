

interface TaskComponentType{
    text: string
}

export default function Task({text}:TaskComponentType){
    return (
        <p>{text}</p>
    )
}