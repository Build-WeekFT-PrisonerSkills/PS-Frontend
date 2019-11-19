//Login Form
import React, {useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
`

const FormEntry = styled.div`
  margin: 20px;
`
const ImgContainer = styled.div`
  margin: 0 auto;
`
const FormContainer = styled.div`
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  text-align: center;
  color: #000000;
`

const LoginForm = ({ values, status, errors, touched, setUserToken, isSubmitting}) => {
  useEffect(() => {
    if (status) {
      setUserToken(status)
    }
  }, [status])

  return (
    <MainContainer>

    <ImgContainer>
      <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
    </ImgContainer>
    <FormContainer>
      <Form>
          <Title>Login</Title>
          <FormEntry>
            <Field className='loginEntry' type='email' name='username' placeholder='Email' />
            {touched.username && errors.username && (<StyledErrorMessage>{errors.username}</StyledErrorMessage>)}
          </FormEntry>
          <FormEntry>
            <Field className='loginEntry' type='password' name='password' placeholder='Password' />
            {touched.password && errors.password && (<StyledErrorMessage>{errors.password}</StyledErrorMessage>)}
          </FormEntry>
          <button type='submit'>Login</button>
      </Form>
    </FormContainer>
    </MainContainer>
  )
};

const FormikLoginForm = withFormik({
  mapPropsToValues({username, password}) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Must Enter a Username'),
    password: Yup.string().required('Must Enter a Password')
  }),

  handleSubmit(values, {setStatus}) {
    axiosWithAuth()
      .post('/api/auth/login', values)
      .then(res =>{
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(LoginForm);

export default FormikLoginForm