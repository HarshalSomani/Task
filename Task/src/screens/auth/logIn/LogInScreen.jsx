import React, { useEffect, useState } from 'react';
import AuthServices from '../../../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import LogInScreenUI from './LogInScreenUI';

// Main component for handling login functionality
const LogInScreen = () => {
    const navigate = useNavigate();
    
    // State to manage form values, loading state, and error messages
    const [state, setState] = useState({
        loading: false,
        error: null,
        formValues: {
            username: '',
            password: '',
        }
    });

    // Effect to initialize global employees data if not already set
    useEffect(() => {
        if (!global.allEmployees) {
            global.allEmployees = [];
        } else {
            global.allEmployees = global.allEmployees.map(employee => {
                if (typeof employee.id === 'function') {
                    return { ...employee, id: Date.now().toString() };
                }
                return employee;
            });
        }

        // console.log(' All Employees:', global.allEmployees);
    }, []);

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log('name==>', name);
        // console.log('value==>', value);
        setState((prevState) => ({
            ...prevState,
            formValues: {
                ...prevState.formValues,
                [name]: value
            }
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        console.log('login submit==>', e.target);
        e.preventDefault();
        onFinish(state.formValues);
    };

    // Handle form submission and login process
    const onFinish = async (values) => {
        console.log('values==>', values);
        setState({ ...state, loading: true, error: null });

        try {
            const role = await AuthServices.login(values);
            console.log('role==>', role);
            if (role === 'admin') {
                navigate('/admin');
            } else if (role === 'employee') {
                const employee = global.allEmployees.find(emp => emp.name === values.username);
                console.log('employee global==>', employee);
                navigate('/employee', { state: { employee } });
            } else {
                setState({ ...state, error: 'Invalid credentials' });
            }
        } catch (error) {
            setState({ ...state, error: 'Login failed' });
            console.log("Login failed======>:", error);
        }
    };

    // Render the UI component with props
    return (
        <div>
            <LogInScreenUI
                {...state}
                onFinish={onFinish}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default LogInScreen;
