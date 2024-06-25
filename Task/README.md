

                               ####### Overall Flow ########

User Login:
        User navigates to the login page.
        User enters credentials and submits the form.
        Depending on the credentials, the user is navigated to either the admin dashboard or employee dashboard.
Admin Dashboard:
    Admin sees a list of employees and can add or delete employees.
    Admin can log out, navigating back to the home page.
Employee Dashboard:
    Employee sees their details in a card format.
    Employee can log out, navigating back to the home page.



                   ********** Flow of code for the entire application **********

1. Login Screen (LogInScreen.js)
    Initialization:
        LogInScreen initializes state with loading, error, and formValues.

    Effect Hook:
        On component mount, it checks if global.allEmployees exists.
        If not, it initializes it as an empty array. If it exists, it ensures every employee has a valid id.
    Event Handlers:
        handleChange updates form values in the state as the user types.
        handleSubmit prevents form submission and calls onFinish with the current form values.

    Authentication:
        onFinish sets loading to true and calls AuthServices.login.
        Depending on the role returned by AuthServices.login:
        Navigates to the admin dashboard if role is admin.
        Navigates to the employee dashboard if role is employee.
        Sets an error message for invalid credentials.
        If login fails, it catches the error and sets the error message in the state.

    Render:
        Renders LogInScreenUI with the current state and event handlers.

2. Admin Dashboard (AdminDashboardScreen.js)
    Initialization:
        AdminDashboardScreen initializes and sets up useNavigate.

    Event Handlers:
        handleSubmit logs out the admin and navigates to the home page.

    Render:
        Renders AdminDashboardScreenUI with handleSubmit.

3. Admin Dashboard UI (AdminDashboardScreenUI.js)

    Render:
        Renders a navbar with a logout button.
        Displays EmployeeListScreen.

4. Employee List Screen (EmployeeListScreen.js)

    Initialization:
        EmployeeListScreen initializes state with employees and form values.

    Effect Hook:
        On component mount, it calls fetchEmployees to load employees from the server.

    Event Handlers:
        handleInputChange updates form values in the state as the user types.
        handleSubmit prevents form submission and calls handleAddEmployee with the current form values.
        toggleModalVisibility toggles the modal visibility in the state.
        handleDeleteEmployee calls EmployeeService.deleteEmployee and refreshes the employee list.

    Employee Operations:
        fetchEmployees fetches employees from EmployeeService and updates the state.
        handleAddEmployee adds a new employee using EmployeeService and refreshes the employee list.

    Render:
        Renders EmployeeListScreenUI with the current state and event handlers.

5. Employee List Screen UI (EmployeeListScreenUI.js)
    Render:
        Renders an "Add Employee" button.
        Displays a table of employees.      
        Displays a modal form for adding an employee when isModalVisible is true.

6. Employee Dashboard (EmployeeDashScreen.js)

    Initialization:
        EmployeeDashScreen initializes and sets up useNavigate and useLocation.
        Sets state with the employee data from location.state.

    Effect Hook:
        If no employee data is found in the state, it navigates to the home page.

    Event Handlers:
        handleSubmit logs out the employee and navigates to the home page.

    Render:
        Renders EmployeeDashScreenUI with the current state and event handlers.

7. Employee Dashboard UI (EmployeeDashScreenUI.js)

    Render:
        Renders a navbar with a logout button.
        Displays the employee details in a card format.

8. Authentication Services (AuthServices.js)

    Login Function:
        login checks the credentials:
            Returns admin if the username and password are both admin.
            Returns employee if the username and phone match an employee in global.allEmployees.
            Throws an error for invalid credentials.

9. Employee Services (EmployeeService.js)

    Employee Data:
        Initializes a sample list of employees.

    Service Functions:
        getAllEmployees returns the current list of employees.
        addEmployee adds a new employee to the list and updates global.allEmployees.
        deleteEmployee removes an employee from the list by ID and updates global.allEmployees.

