import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const [loggedIn, setLoggedIn] = useState('');
    async function submitted(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user', { email }, {
            });
            let data = response.data;
            console.log(data);
            if (data.password === password) {
                localStorage.setItem('your_hr', email);
                setLoggedIn(email);
                setMessage('');
            }
            else {
                setMessage('incorrect password');
            }

        } catch (error) {
            console.error(error);
        }

    }
    return (
        <>
            <form className="max-w-sm mx-auto mt-4">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <div className='text-gray-200'>{message}</div>
                </div><button type="submit" onClick={submitted} className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <Link className='mt-4 block mb-2 text-lg font-medium text-gray-900 dark:text-white' to='/signup'>Signup?</Link>
            </form>
        </>
    )
}

export default Login