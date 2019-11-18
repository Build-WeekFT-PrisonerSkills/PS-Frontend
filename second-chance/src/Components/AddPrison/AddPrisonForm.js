import React, {useState} from 'react';

import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddPrisonForm = ({name, address, city, email, contactPhone, status, touched, errors}) => {
  const [addPrison, setAddPrison] = useState([]);
  return (
    <div>
      <h1>Add Prison Form</h1>
      <Form>
        <label>Name</label>
        <Field type='text' name='name' />

        <label>Address</label>
        <Field type='text' name='address' />

        <label>City</label>
        <Field type='City' name='city' />

        <label>Email</label>
        <Field type='text' name='email' />

        <lable>Contact Phone</lable>
        <Field type='text' name='contactPhone' />
      </Form>
    </div>
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
    name: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    email: Yup.string().required(),
    contactPhone: Yup.string().required()
  }),
  handleSubmilt() {}
})(AddPrisonForm);

export default FormikAddPrisonForm;
