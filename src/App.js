import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import {useEffect, useState} from "react";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isAddTask, setIsAddTask] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            await axios.get('http://localhost:5000/tasks').then((res) => {
                setTasks(res.data)
            })
        }
        getTasks();
    }, []);

    const onBtnClick = () => {
        if (!isAddTask) setIsAddTask(true); else setIsAddTask(false);
    }
    const onDataAdd = async ({name, timeline, isRemembered}) => {
        await axios.post('http://localhost:5000/tasks', JSON.stringify({
            name, timeline, isRemembered
        }), {headers: {"Content-Type": 'application/json'}}).then((res) => {
            setTasks([...tasks, res.data]);
        })
    }
    const onDataDelete = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`).then((res) => res.status === 200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert('Error deleting data ...'));

    }
    const onDataRememberToggle = async (id) => {
        const taskToToggle = await axios.get(`http://localhost:5000/tasks/${id}`);
        const updatedTask = {...taskToToggle.data, isRemembered: !taskToToggle.data.isRemembered};

        const res = await axios.put(`http://localhost:5000/tasks/${id}`, JSON.stringify(updatedTask), {headers: {"Content-Type": "application/json"}})
        const data = await res.data;

        setTasks(tasks.map((task) => task.id === id ? {...task, isRemembered: data.isRemembered} : task))
    }

    return <>
        <Router>
            <div className="flex flex-col h-screen justify-between">
                <Header/>
                <Routes>
                    <Route path='/' element={<>
                        <main className="mb-auto overflow-scroll">
                            <div className='container mx-auto mb-5 mt-5'>
                                <div className="flex flex-auto h-screen">
                                    <div className="flex-none w-14">
                                    </div>
                                    <div className="flex-grow">
                                        <Button name={isAddTask ? 'Cancel' : 'Add task'} onclick={onBtnClick}/>
                                        {isAddTask && <AddTask onAdd={onDataAdd}/>}
                                        {tasks.length > 0 ? <Tasks
                                            tasks={tasks}
                                            onDelete={onDataDelete}
                                            onRememberToggle={onDataRememberToggle}/> : <>
                                            <p className='mt-2'>No Tasks Available ...</p>
                                        </>}
                                    </div>
                                    <div className="flex-none w-14">
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>

                <Footer/>
            </div>
        </Router>
    </>;
}

export default App;