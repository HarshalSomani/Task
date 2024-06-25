import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import EmployeeDashScreenUI from './EmployeeDashScreenUI';

// Main component for handling the employee dashboard
const EmployeeDashScreen = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // State to manage the employee data
    const [state, setState] = useState({
        employee: location.state?.employee || null
    });

    // Log the employee data for debugging purposes
    console.log('location dash==>', state?.employee);

    // Effect to redirect to the login page if no employee data is found
    useEffect(() => {
        if (!state.employee) {
            navigate('/');
        }
    }, [state.employee, navigate]);

    // Handle logout action
    const handleSubmit = () => {
        console.log('Clicked Logout');
        navigate('/');
    };

    // Render the UI component with props
    return (
        <div>
            <EmployeeDashScreenUI
                {...props}
                employee={state.employee}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default EmployeeDashScreen;
