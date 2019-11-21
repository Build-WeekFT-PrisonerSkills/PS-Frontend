import React, {useState, useEffect} from "react";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import {registerUser} from '../Actions/authAction';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {NavBarOther} from '../Components/NavBarOther';

const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffff;
`
const FormEntry = styled.div`
  margin: 20px;
  font-size: 2rem;
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
  color: black;
  text-align: center;
`

const RegisterForm = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.registerUser(state);
    props.history.push('/addPrison');
  }
  return (
    <>
    <NavBarOther/>
    <MainContainer>
 
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1566453838084-7ec27e71b3ca?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=932q=80' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>Register</h1>
        
        </Title>
        <form onSubmit={onSubmit}>
        <FormEntry>
            <input
              type='email' 
              name='email' 
              placeholder='E-mail'
              value={props.email}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='password' 
              name='password' 
              placeholder='Password'
              value={props.password}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <button type='submit' >Register</button>
          <div style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
            <p style={{marginTop: '8px'}}>Already a Member? </p>
            <Link to="/login" style={{textDecoration: 'none', fontSize: '1.5rem'}}> <button>Login</button></Link>
          </div>
          
        </form>
      </FormContainer>
      
    </MainContainer>
    </>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(
  mapStateToProps, 
  {registerUser})(RegisterForm);


