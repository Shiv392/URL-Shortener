import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            name: name, email: email, password: password
        }
        console.log('form data--------->', formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-w-150 max-w-300">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </p>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Name
                            </label>
                            <input placeholder="Enter Name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input placeholder="Enter Email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input value={password} autoComplete='off' onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Confirm password
                            </label>
                            <input value={password2} autoComplete='off' onChange={(e) => setPassword2(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-light text-gray-500 text-gray-300">
                                    I accept the
                                    <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <p className='text-center text-sm text-gray-600 cursor-pointer hover:text-blue-800' onClick={() => navigate('/')}>Already have an account? Login</p>

                        <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                            Create an account
                        </button>

                    </div>
                </div>
            </div>
        </form>

    )
}
export default SignUpForm;