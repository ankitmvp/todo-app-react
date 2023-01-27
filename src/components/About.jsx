import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">To Do Tracker app</h1>
                        <p className="py-6">UI Built by Ankit Bansal v1.0.0</p>
                        <Link className="btn btn-primary" to='/'>Go back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About