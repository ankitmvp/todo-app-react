import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import {useState} from "react";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";

function App() {
    const [tasks, setTasks] = useState([{
        id: 1, name: 'Go to doctor', timeline: '20 Jan 2023', isRemembered: false
    }, {
        id: 2, name: 'Go to office', timeline: '22 Jan 2023', isRemembered: true
    }, {
        id: 3, name: 'Play games', timeline: '30 Mar 2023', isRemembered: false
    },]);
    const [isAddTask, setIsAddTask] = useState(false)
    const onBtnClick = () => {
        if (!isAddTask) setIsAddTask(true); else setIsAddTask(false);
    }
    const onDataAdd = ({name, timeline, isRemembered}) => {
        setTasks([...tasks, {id: 4, name: name, timeline: timeline, isRemembered: isRemembered}])
    }
    const onDataDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const onDataRememberToggle = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, isRemembered: !task.isRemembered} : task
            )
        )
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
                                        {tasks.length > 0
                                            ? <Tasks
                                                tasks={tasks}
                                                onDelete={onDataDelete}
                                                onRememberToggle={onDataRememberToggle}/>
                                            : <>
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