import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboardScreenUI from './AdminDashboardScreenUI';

// Main component for Admin Dashboard
const AdminDashboardScreen = () => {
    // Hook to programmatically navigate
    const navigate = useNavigate();

    // Handler for logout action
    const handleSubmit = () => {
        console.log("Logging out...");
        navigate('/');  // Navigate to the home page after logout
    };

    // Render the Admin Dashboard UI with the logout handler
    return (
        <div>
            <AdminDashboardScreenUI handleSubmit={handleSubmit} />
        </div>
    );
}

export default AdminDashboardScreen;