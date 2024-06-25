import React, { useState, useEffect } from 'react';
import EmployeeService from '../../../services/EmployeeService';
import EmployeeListScreenUI from './EmployeeListScreenUI';

// Main component for displaying and managing the employee list
const EmployeeListScreen = () => {
    // State to manage employees, form values, and modal visibility
    const [state, setState] = useState({
        employees: [],
        updateKey: Date.now(), // To force re-render
        formValues: {
            name: '',
            email: '',
            position: '',
            department: '',
            dateOfJoining: '',
            phone: '',
            address: ''
        },
        isModalVisible: false // Manage modal visibility
    });

    // Fetch employees when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('list==>', name);
        console.log('value==>', value);
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
        console.log('Submit List==>', e.target);
        e.preventDefault();
        handleAddEmployee(state.formValues);
    };

    // Fetch all employees from the service
    const fetchEmployees = async () => {
        const data = await EmployeeService.getAllEmployees();
        global.allEmployees = data; // Assign to global variable
        setState((prevState) => ({
            ...prevState,
            employees: data,
            updateKey: Date.now()
        }));
    };

    // Add a new employee using the service
    const handleAddEmployee = async (empValues) => {
        await EmployeeService.addEmployee(empValues);
        fetchEmployees(); // Refresh employee list
        setState((prevState) => ({
            ...prevState,
            isModalVisible: false, // Hide modal after adding
            formValues: {
                name: '',
                email: '',
                position: '',
                department: '',
                dateOfJoining: '',
                phone: '',
                address: ''
            }
        }));
    };

    // Delete an employee using the service
    const handleDeleteEmployee = async (id) => {
        await EmployeeService.deleteEmployee(id);
        fetchEmployees(); // Refresh employee list
    };

    // Toggle modal visibility
    const toggleModalVisibility = (visible) => {
        setState((prevState) => ({
            ...prevState,
            isModalVisible: visible
        }));
    };

    // Render the UI component with props
    return (
        <div>
            <EmployeeListScreenUI
                {...state}
                handleAddEmployee={handleAddEmployee}
                handleDeleteEmployee={handleDeleteEmployee}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                toggleModalVisibility={toggleModalVisibility}
            />
        </div>
    );
};

export default EmployeeListScreen;
