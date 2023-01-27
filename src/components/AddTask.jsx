import {FaSave} from "react-icons/fa";
import {useState} from "react";
import PropTypes from "prop-types";

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('')
    const [timeline, setTimeline] = useState('')
    const [isRemembered, setIsRemembered] = useState(false)

    const onSave = (e) => {
        e.preventDefault();

        if(!name){
            alert('Please enter a task name ...')
            return
        }

        onAdd({name, timeline, isRemembered});

        setName('')
        setTimeline('')
        setIsRemembered(false)
    }
    return <>
        <form onSubmit={onSave}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Task Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter the task name here ..."
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Timeline</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter the Date here ..."
                    className="input input-bordered w-full"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                />
            </div>
            <div className="form-control w-full mt-2 mb-2">
                <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span>
                    <input type="checkbox" className="toggle" checked={isRemembered}
                    onChange={(e) => setIsRemembered(e.currentTarget.checked)}/>
                </label>
            </div>
            <button className="btn btn-outline btn-secondary btn-md"><FaSave/>&nbsp;Save</button>
        </form>
    </>;
}

AddTask.propTypes = {
    name: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    isRemembered: PropTypes.bool.isRequired
}
export default AddTask;