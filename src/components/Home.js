import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Home() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('your_hr'));
    const navigate = useNavigate();

    function logout() {
        localStorage.setItem('your_hr', 'null');
        setLoggedIn(false);
        navigate('/login');
        console.log("hi")
    }
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Your HR</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Find you dream job on with the help of Your HR. Whether you are a fresher who is just getting started or an experienced employee wanting a growth. We are there for you.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    </div>
                </div>
            </section>

            {(loggedIn !== 'null') ? <div className='p-2 text-center text-2xl text-gray-900 dark:text-gray-200'>Welcome {loggedIn}<br />
                <button onClick={logout} className='mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Logout</button>
            </div> : <div className='block font-bold mx-auto text-center text-lg text-gray-900 mt-4 dark:text-gray-100'><span>Login to get started</span><br />
                <Link to="/login"><button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link><br />
            </div>}

        </>
    )
}

export default Home