const EmployeeService = {
  // Initial sample employee data
  employees: [
      {
          id: 123456789,
          name: 'Raj', 
          email: 'Raj@abc.com',
          position: 'Developer',
          department: 'Engineering',
          dateOfJoining: '2024-03-25',
          phone: '9876543210',
          address: 'Jalgaon'
      },
      { 
          id: 223568973,
          name: 'Vinit', 
          email: 'Vinit@abc.com',
          position: 'Designer',
          department: 'Design',
          dateOfJoining: '2022-03-25',
          phone: '9876543210',
          address: 'Pune'
      },
      { 
          id: 562588973, 
          name: 'Ajay', 
          email: 'Ajayt@abc.com',
          position: 'Tester',
          department: 'Design',
          dateOfJoining: '2021-03-25',
          phone: '9876543210',
          address: 'Nashik'
      },
  ],

  // Function to get all employees
  async getAllEmployees() {
      // Returns the list of employees
      return this.employees;
  },

  // Function to add a new employee
  async addEmployee(employee) {
      // Adds a new employee with a unique ID
      this.employees.push({ ...employee, id: Date.now().toString() });
      // Update the global employee list
      global.allEmployees = this.employees;
  },

  // Function to delete an employee by ID
  async deleteEmployee(id) {
      // Filters out the employee with the specified ID
      this.employees = this.employees.filter(emp => emp.id !== id);
      // Update the global employee list
      global.allEmployees = this.employees;
  }
};

export default EmployeeService;
