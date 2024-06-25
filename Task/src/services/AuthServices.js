const AuthServices = {
  // Asynchronous function to handle login logic
  async login({ username, password }) {

      // Check if the user is an admin
      if (username === 'admin' && password === 'admin') {
          console.log('admin login==>');
          return 'admin';
      }

      // Check if the user is an employee
      if (global.allEmployees && global.allEmployees.length) {
          // Find the employee in the global list by username
          const employeeUser = global.allEmployees.find(emp => emp.name === username);
          console.log('emplyeeUsernameMatch==>', employeeUser);

          // Validate the employee's credentials
          if (employeeUser && employeeUser.phone === password) {
              console.log('employee login==>');
              return 'employee';
          }
      }

      // If credentials are invalid, throw an error
      else {
          throw new Error('Invalid credentials');
      }
  }
};

export default AuthServices;
