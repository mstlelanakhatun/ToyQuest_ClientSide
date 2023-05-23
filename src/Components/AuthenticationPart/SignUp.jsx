import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, GoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Google Login

    const GoogleHandler = () => {
        GoogleLogin()
            .then(res => {
                const user = res.user;
                // console.log(user);
                setError('');
                setSuccess('Login With Google!');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                setError(error.message);
                setSuccess();
            });
    }

    // Login with Email and password 
    const handleRegister = event => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.{8})/.test(password)) {
            setError('Please ensure password is of length 8');
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has created successfully');
                navigate(from, { replace: true })
                updateUserData(result.user, name, photo);
            })
            .catch(Error => {
                console.error(Error)
                setError(Error.message);
                setSuccess('')
            })

    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                // console.log('user name updated')
            })
            .catch(err => {
                // console.log(err.message)
                setError(err.message)
            })
    }

    return (
        <div className="flex justify-center items-center md:min-h-screen bg-[#fcfcfc]">
            <div data-aos="fade-left" className="container mb-10 mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign Up</h1>
                    <p className="text-gray-500">Create a new account</p>
                </div>

                <div className="m-6">
                    <form onSubmit={handleRegister} className="mb-4">
                        <div className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Photo Url</label>
                            <input type="text" name="photo" id="photo" placeholder="Your Photo Url" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-[#49afa2] focus:outline-none duration-100 ease-in-out">Sign up</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Already have an account?
                            <Link to='/login'> <button className="font-semibold text-indigo-500 focus:text-indigo-500 focus:outline-none focus:underline">Sign in</button></Link>
                        </p>
                    </form>

                    <div className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button onClick={GoogleHandler} className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out"> <FaGoogle />
                            Google
                        </button>
                    </div>
                    <p data-aos="fade-left" className='text-indigo-500 mt-5'>{error}</p>
                    <p data-aos="fade-left" className='text-indigo-500 mt-5'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;