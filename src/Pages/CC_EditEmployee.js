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

export const CC_EditEmployee = () => {
  return (
    <>
      <h1>Edit an Employee</h1>
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
            .max(20, "Must be 20 characters or less"),
          inmateLastName: Yup.string()
            .max(20, "Must be 20 characters or less"),
          prison_id: Yup.string(),
          skillset: Yup.string(),
          age: Yup.string(),
          workExperience: Yup.string(),
          image: Yup.string(),
          available: Yup.string()
        })}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          axiosWithAuth()
          .put('/api/users/inmates', values)
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