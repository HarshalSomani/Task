import React from 'react';

// UI component for displaying and managing the employee list
const EmployeeListScreenUI = (props) => {
    return (
        <div className="p-4">
            {/* Button to add a new employee */}
            <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded-md"
                type="button"
                onClick={() => props.toggleModalVisibility(true)}
            >
                Add Employee
            </button>

            {/* Table to display employee list */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-center">
                    <thead>
                        <tr className="w-full bg-gray-600 text-white">
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Position</th>
                            <th className="p-2">Department</th>
                            <th className="p-2">Date of Joining</th>
                            <th className="p-2">Phone</th>
                            <th className="p-2">Address</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map((employee) => (
                            <tr key={employee?.id} className="border-b">
                                <td className="p-2">{employee?.name}</td>
                                <td className="p-2">{employee?.email}</td>
                                <td className="p-2">{employee?.position}</td>
                                <td className="p-2">{employee?.department}</td>
                                <td className="p-2">{employee?.dateOfJoining}</td>
                                <td className="p-2">{employee?.phone}</td>
                                <td className="p-2">{employee?.address}</td>
                                <td className="p-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                        onClick={() => props.handleDeleteEmployee(employee?.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for adding a new employee */}
            {props.isModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                        <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
                        <form onSubmit={props.handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={props.formValues.name}
                                    onChange={props.handleInputChange}
                                    placeholder="Name"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={props.formValues.email}
                                    onChange={props.handleInputChange}
                                    placeholder="Email"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="position"
                                    value={props.formValues.position}
                                    onChange={props.handleInputChange}
                                    placeholder="Position"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="department"
                                    value={props.formValues.department}
                                    onChange={props.handleInputChange}
                                    placeholder="Department"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    name="dateOfJoining"
                                    value={props.formValues.dateOfJoining}
                                    onChange={props.handleInputChange}
                                    placeholder="Date of Joining"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={props.formValues.phone}
                                    onChange={props.handleInputChange}
                                    placeholder="Phone No"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="address"
                                    value={props.formValues.address}
                                    onChange={props.handleInputChange}
                                    placeholder="Address"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => props.toggleModalVisibility(false)}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeListScreenUI;
