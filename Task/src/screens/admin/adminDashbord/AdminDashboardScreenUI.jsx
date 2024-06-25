import React from 'react';
import EmployeeListScreen from '../employeeList/EmployeeListScreen';
import Navbar from '../../../component/commComponent/Navbar';

// UI component for Admin Dashboard
const AdminDashboardScreenUI = (props) => {
    return (
        <div>
            {/* Main container with background color */}
            <div className="h-screen bg-cyan-400">

                {/* Navbar with logout functionality */}
                <Navbar handleSubmit={props.handleSubmit}
                        btnName={"Logout"} />
                
                {/* Section for displaying employee list and info form */}
                <div className="p-12">
                    <EmployeeListScreen />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardScreenUI;