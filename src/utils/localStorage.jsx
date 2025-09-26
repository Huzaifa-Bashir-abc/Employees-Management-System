export const setLocalStorage = (employees) => {
  if (employees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  } else {
    // Initial setup with admin user
    const defaultEmployees = [
      {
        id: 1,
        firstName: "Admin",
        email: "admin@me.com",
        password: "123",
        isAdmin: true,
        taskCounts: {
          active: 0,
          newTask: 0,
          completed: 0,
          failed: 0,
        },
        tasks: [],
      },
      // ... (keep your existing employee data)
    ];
    localStorage.setItem("employees", JSON.stringify(defaultEmployees));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = employees.filter((e) => e.isAdmin);
  const regularEmployees = employees.filter((e) => !e.isAdmin);
  return {
    admin,
    employees: regularEmployees,
    allUsers: employees, // Includes both admin and regular employees
  };
};
