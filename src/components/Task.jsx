import {FaInfo, FaStar, FaTrash} from 'react-icons/fa'

const Task = ({task, onDelete, onRememberToggle}) => {
    return (<>
        <div className="alert shadow-lg mt-5 mb-5">
            <div>
                <FaInfo/>
                <div>
                    <h3 className="font-semibold">{task.name}</h3>
                    <div className="text-xs">{task.timeline}</div>
                </div>
            </div>
            <div className="flex-none">
                <FaTrash style={{cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
                <FaStar color={task.isRemembered ? 'red' : 'orange'} onClick={() => onRememberToggle(task.id)}/>
            </div>
        </div>
    </>)
}

export default Task;