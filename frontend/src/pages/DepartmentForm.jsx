import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const DepartmentForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    departmentName: Yup.string().required("Department Name is required"),
    categoryName: Yup.string().required("Category Name is required"),
    location: Yup.string().required("Location is required"),
    salary: Yup.number().required("Salary is required"),
    employeeID: Yup.string().required("Employee ID is required"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <div className="card-header">
            <h4>Department</h4>
          </div>
          <div className="card-body"></div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="form-group my-4">
                <label htmlFor="departmentName">Department Name</label>
                <Field
                  type="text"
                  name="departmentName"
                  className="form-control"
                  placeholder="Enter department name"
                />
                <ErrorMessage
                  name="departmentName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="categoryName">Category Name</label>
                <Field
                  type="text"
                  name="categoryName"
                  className="form-control"
                  placeholder="Enter category name"
                />
                <ErrorMessage
                  name="categoryName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="location">Location</label>
                <Field
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Enter location"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="salary">Salary</label>
                <Field
                  type="number"
                  name="salary"
                  className="form-control"
                  placeholder="Enter salary"
                />
                <ErrorMessage
                  name="salary"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="employeeID">Employee ID</label>
                <Field
                  type="text"
                  name="employeeID"
                  className="form-control"
                  placeholder="Enter employee ID"
                />
                <ErrorMessage
                  name="employeeID"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button type="submit" className="btn my-3 btn-primary">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default DepartmentForm;
