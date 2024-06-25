import React from 'react';

// UI component for the login screen
const LogInScreenUI = (props) => {
    console.log('props?.error==>', props?.error);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-wrap items-center w-full">
                
                {/* Image Illustration part */}
                <div className="w-0 sm:w-1/2 md:w-[66%] hidden sm:flex justify-center items-center m-0 bg-blue-600 h-screen">
                    <img src="/tqu-removebg-preview.png" alt="Login Illustration" className="w-1/4" />
                    <div>
                        <h5 className='text-black font-semibold'>Hello, Sir</h5>
                        <h6 className='text-black font-semibold'>Thank you for giving me this opportunity...</h6>
                    </div>
                </div>

                {/* Login form */}
                <div className="w-full sm:w-1/2 md:w-1/3 p-3 md:h-screen place-content-center md:ml-[5px]">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">Welcome To Demo</h2>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>
                        <form onSubmit={props?.handleSubmit} className="space-y-4">
                            
                            {/* Username Input */}
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <input
                                    type="text"
                                    name="username"
                                    value={props?.formValues?.username}
                                    onChange={props?.handleChange}
                                    placeholder="Username"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    required
                                />
                                <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>

                            {/* Password Input */}
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <input
                                    type="password"
                                    name="password"
                                    value={props?.formValues?.password}
                                    onChange={props?.handleChange}
                                    placeholder="Password"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    required
                                />
                                <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-5H11v-4h2v4zm0 2H11v2h2v-2z" />
                                </svg>
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props?.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={props?.loading}
                            >
                                {props?.loading ? 'Logging in...' : 'Log in'}
                            </button>
                            {props.error && <p className="mt-4 text-red-600 text-center">{props.error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInScreenUI;
