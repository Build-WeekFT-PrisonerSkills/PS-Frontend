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

export const CC_AddEmployee = () => {
  return (
    <>
      <h1>Add a New Employee</h1>
      <Formik
        initialValues={{
          inmateFirstName: "",
          inmateLastName: "",
          prison_id: "",
          skillset: "",
          age: "",
          workExperience: "",
          image: "",
          available: ""
        }}
        validationSchema={Yup.object({
          inmateFirstName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          inmateLastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          prison_id: Yup.string()
            .required("Required"),
          skillset: Yup.string()
            .required("Required"),
          age: Yup.string()
            .required("Required"),
          workExperience: Yup.string()
            .required("Required"),
          image: Yup.string()
            .required("Required"),
          available: Yup.string()
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          axiosWithAuth()
          .post('/api/users/inmates', values)
          .then(res =>{
            console.log(res);
            setSubmitting(res.data);
          })
          .catch(err => console.log(err.res));
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="inmateFirstName"
            type="text"
            placeholder="First Name"
          />
          <MyTextInput
            label="Last Name"
            name="inmateLastName"
            type="text"
            placeholder="Last Name"
          />
          <MyTextInput
            label="Prison ID"
            name="prison_id"
            type="text"
            placeholder="Prison ID"
          />
          <MyTextInput
            label="Skillset"
            name="skillset"
            type="text"
            placeholder="Skills"
          />
          <MyTextInput
            label="Age"
            name="age"
            type="text"
            placeholder="Age"
          />
          <MyTextInput
            label="Work Experience"
            name="workExperience"
            type="text"
            placeholder="Work Experience (Years)"
          />
          <MyTextInput
            label="Image"
            name="image"
            type="text"
            placeholder="URL to Image"
          />
          <MyTextInput
            label="Available"
            name="available"
            type="text"
            placeholder="0 or 1"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};


