import Task from "./Task";

const Tasks =({tasks, onDelete, onRememberToggle}) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onRememberToggle={onRememberToggle}/>
            ))}
        </>
    )
}
export default Tasks