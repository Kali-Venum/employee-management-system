import React from "react";

const DepartmentList = ({ departments }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Category Name</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.departmentName}</td>
              <td>{department.categoryName}</td>
              <td>{department.location}</td>
              <td>{department.salary}</td>
              <td>{department.employeeId}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => onDelete(department.id)}
                >
                  Delete
                </button>
                <button variant="primary" onClick={() => onEdit(department)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
