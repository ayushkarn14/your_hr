import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    function logout() {
        localStorage.setItem('your_hr', '');
        navigate('/');
        console.log("hi")
    }
    useEffect(() => {
        async function fetchData() {
            // You can await here
            setEmail(localStorage.getItem('your_hr'));
            if (email != '') {
                try {
                    const response = await axios.post('http://localhost:3000/user', { email }, {
                    });
                    let data = response.data;
                    console.log(data);
                    setEmail(data.email);
                    setName(data.name);
                    setJob(data.job_type);
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchData();
    },);

    return (
        <>
            <h1 className='text-center mt-4 bm-4 font-extrabold text-4xl text-gray-900 dark:text-gray-100'>Profile page</h1>
            <div className=' grid grid-cols-3 gap-4 content-start'>
                <div></div>
                {(email == '') ? <></> : <><div className='text-lg text-gray-900 max-w-fit dark:text-gray-100'>
                    <div>Name : {name}</div>
                    <div>Email : {email}</div>
                    <div>Job type : {job}</div>
                    <button onClick={logout} class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                </div></>}
                <div></div>
            </div >

        </>
    )
}

export default Profile