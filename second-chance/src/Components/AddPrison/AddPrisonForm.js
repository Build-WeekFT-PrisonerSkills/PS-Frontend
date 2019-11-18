import React, {useState} from 'react';

import {withFormik} from 'formik';
import * as Yup from 'yup';

import {Inputs, FieldInput, Container, Form} from './AddPrisonFormStyled';

const AddPrisonForm = ({name, address, city, email, contactPhone, status, touched, errors}) => {
  const [addPrison, setAddPrison] = useState([]);
  return (
    <Container>
      <h1>Add Prison Form</h1>
      <Form>
        <Inputs>
          <label htmlFor={name}>Name</label>

          <FieldInput id='name' type='text' name='name' />
          {touched.name && errors.name && <p>{errors.name}</p>}
        </Inputs>

        <Inputs>
          <label>Address</label>
          <FieldInput type='text' name='address' className='text' />
          {touched.address && errors.address && <p>{errors.address}</p>}
        </Inputs>

        <Inputs>
          <label>City</label>
          <FieldInput type='City' name='city' />
          {touched.city && errors.city && <p>{errors.city}</p>}
        </Inputs>

        <Inputs>
          <label>Email</label>

          <FieldInput type='text' name='email' />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </Inputs>

        <Inputs>
          <lable>Contact Phone</lable>
          <FieldInput type='text' name='contactPhone' />
          {touched.contactPhone && errors.contactPhone && <p>{errors.contactPhone}</p>}
        </Inputs>
        <button>Submit</button>
      </Form>
    </Container>
  );
};

const FormikAddPrisonForm = withFormik({
  mapPropsToValues({name, address, city, email, contactPhone}) {
    return {
      name: name || '',
      address: address || '',
      city: city || '',
      email: email || '',
      contactPhone: contactPhone || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    email: Yup.string()
      .email('Email is required')
      .required('Email is required'),
    contactPhone: Yup.string()
      .min(10, 'Number must be 10 character long')
      .required('Enter proper contact number')
  }),
  handleSubmilt() {}
})(AddPrisonForm);

export default FormikAddPrisonForm;
