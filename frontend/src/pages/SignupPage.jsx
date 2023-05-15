import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    hobbies: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    hobbies: Yup.string().required("Hobbies are required"),
  });

  const handleSubmit = (values) => {
    // Perform signup logic here
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Signup</h4>
            </div>
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group my-3">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter first name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="gender">Gender</label>
                    <Field as="select" name="gender" className="form-control">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="hobbies">Hobbies</label>
                    <Field
                      type="text"
                      name="hobbies"
                      className="form-control"
                      placeholder="Enter your hobbies"
                    />
                    <ErrorMessage
                      name="hobbies"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button type="submit" className="btn my-4 btn-primary">
                    Signup
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
