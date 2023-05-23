import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signIn, GoogleLogin } = useContext(AuthContext);

    // Google Login

    const GoogleHandler = () => {
        GoogleLogin()
            .then(res => {
                const user = res.user;
                // console.log(user);
                setError('');
                setSuccess('Successfully Login!');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                setError(error.message);
                setSuccess();
            });
    }

    // Email and password Login
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                setError('');
                event.target.reset();
                setSuccess('Successfully Login!');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                setError(error.message);
                setSuccess();
            });
    }
    return (
        <div className="flex items-center justify-center md:min-h-screen bg-[#fcfcfc]">
            <div data-aos="fade-left" className="container mb-10 mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
                    <p className="text-gray-500">Sign in to access your account</p>
                </div>

                <div className="m-6">
                    <form onSubmit={handleLogin} className="mb-4">
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
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-500  focus:outline-none duration-100 ease-in-out">Sign in</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Don&#x27;t have an account yet?
                            <Link to='/signUp' className="font-semibold text-indigo-500 focus:text-indigo-500 focus:outline-none focus:underline">Sign up</Link>.
                        </p>
                    </form>

                    <div className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button onClick={GoogleHandler} className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out"> <FaGoogle />
                            Google
                        </button>
                    </div>
                    <p className='text-indigo-500 mt-5'>{error}</p>
                    <p className='text-indigo-500 mt-5'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;