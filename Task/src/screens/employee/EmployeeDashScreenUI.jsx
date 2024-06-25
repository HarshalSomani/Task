import React from 'react';
import Navbar from '../../component/commComponent/Navbar';

// UI component for the employee dashboard screen
const EmployeeDashScreenUI = (props) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar common component with logout button */}
            <Navbar
                handleSubmit={props?.handleSubmit}
                btnName={"Logout"}
            />

            {/* Employee card */}
            <div className='bg-emerald-800 grid place-content-center h-screen'>
                <div className="flex flex-col items-center rounded-lg shadow-md max-w-sm md:w-96 mx-auto">
                    <div className='bg-violet-200 w-full grid place-content-center h-2/2'>
                        <div className="w-full py-1 rounded-t-lg">
                            <div className="grid place-content-center font-bold text-xl mb-2 pt-4">XYZ Pvt Ltd</div>
                        </div>
                        <div className="relative mt-4 grid place-content-center">
                            {/* People Icon */}
                            <svg className="h-30 w-20 text-gray-700 rounded-full p-3 border-2 border-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <div className="grid place-content-center mt-4">
                            <h1 className="text-xl text-center font-bold">{props?.employee.name}</h1>
                            <p className="text-gray-600 text-center pb-2">{props?.employee.position}</p>
                        </div>
                    </div>

                    {/* Employee detail */}
                    <div className="bg-white w-full p-4 mx-7 rounded-b-lg h-1/2">
                        <div className="text-left">
                            <p className="text-gray-600"><span className="font-bold">Dept:</span> {props?.employee.department}</p>
                            <p className="text-gray-600"><span className="font-bold">EMAIL:</span> {props?.employee.email}</p>
                            <p className="text-gray-600"><span className="font-bold">PHONE:</span> {props?.employee.phone}</p>
                            <p className="text-gray-600"><span className="font-bold">DATE:</span> {props?.employee.dateOfJoining}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashScreenUI;
