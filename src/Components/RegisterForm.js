// Register form
import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import {Link} from 'react-router-dom';
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
export const RegisterForm = () => {
  return (
    <>
      <h1>Register!</h1>
      <p> Already a Member?  <button><Link to="/api/auth/login"> Login </Link></button></p>
      <Formik
        initialValues={{
          username: "",
          password: "",
          acceptedTerms: false, // added for our checkbox
        //   jobType: "" added for our select
        }}
        validationSchema={Yup.object({
        //   firstName: Yup.string()
        //     .min(15, "Must be 15 characters or less")
        //     .required("Required"),
          username: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        //   jobType: Yup.string()
        //     // specify the set of valid values for job type
        //     // @see http://bit.ly/yup-mixed-oneOf
        //     .oneOf(
        //       ["designer", "development", "product", "other"],
        //       "Invalid Job Type"
        //     )
        //     .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          axiosWithAuth()
          .post('/api/auth/register', values)
          .then(res =>{
            console.log(res);
            setSubmitting(res.data);
          })
          .catch(err => console.log(err.res));
        }}
        // handleSubmit(values, {setStatus}) {
        //   axiosWithAuth()
        //     .post('/api/auth/login', values)
        //     .then(res =>{
        //       console.log(res);
        //       setStatus(res.data);
        //     })
        //     .catch(err => console.log(err.res));
        // }
      >
        <Form>
          <MyTextInput
            label="username"
            name="username"
            type="email"
            placeholder="username"
          />
          <MyTextInput
            label="password"
            name="password"
            type="password"
            placeholder="password"
          />
          {/* <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect> */}
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
