import React, {useState} from 'react';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import './AddPrisonStyles/styles.css';
import './AddPrisonStyles/styles-custom.css';

const MyTextInput = ({label, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};

const MyCheckbox = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: 'checkbox'});
  return (
    <>
      <label className='checkbox'>
        <input {...field} {...props} type='checkbox' />
        {children}
      </label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
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
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({label, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </>
  );
};

// And now we can use these
export const NewPrisonForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          address: '',
          city: '',
          acceptedTerms: false, // added for our checkbox
          state: '', // added for our select
          zipcode: '',
          contactPhone: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(15, 'Must be 15 characters or less')
            .required('Required'),
          address: Yup.string()
            .min(20, 'Must be 20 characters or less')
            .required('Required'),
          city: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          state: Yup.string().required('Required'),
          zipcode: Yup.string().required('Required'),
          contactPhone: Yup.string().required('Required')
        })}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput label='First Name' name='firstName' type='text' placeholder='Jane' />
          <MyTextInput label='Address' name='Address' type='text' placeholder='Doe' />
          <MyTextInput label='City' name='city' type='text' placeholder='San Franicisco' />
          <MyTextInput label='State' name='state' type='text' placeholder='state' />
          <MyTextInput label='ZipCode' name='state' type='text' placeholder='zipcode' />
          <MyTextInput
            label='Email '
            name='address'
            type='email'
            placeholder='youremail@gmail.com'
          />
          <MyTextInput
            label='Contact Number'
            name='address'
            type='text'
            placeholder='999-999-9999'
          />

          <MyCheckbox name='acceptedTerms'>I accept the terms and conditions</MyCheckbox>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
