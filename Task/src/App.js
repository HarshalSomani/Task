import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInScreen from './screens/auth/logIn/LogInScreen';
import AdminDashboardScreen from './screens/admin/adminDashbord/AdminDashboardScreen';
import EmployeeDashScreen from './screens/employee/EmployeeDashScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboardScreen />} />
        <Route path="/employee" element={<EmployeeDashScreen />} />
        <Route path="/" element={<LogInScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
