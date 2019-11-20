import React, {useState, useEffect} from "react";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import {addPrison} from '../Actions/authAction';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`
const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffff;
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
  color: black;
`

const CC_AddPrison = (props) => {
  const [state, setState] = useState({
    prisonName: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    zipcode: '',
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.addPrison(state);
    props.history.push('/dashboard');
  }
  return (
    <MainContainer>
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>addPrison</h1>
        <form onSubmit={onSubmit}>
          <FormEntry>
            Prison Name: <br></br>
            <input
              type='text' 
              name='prisonName' 
              placeholder='prison name'
              value={props.prisonName}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            Address: <br></br>
            <input
              type='text' 
              name='address' 
              placeholder='address'
              value={props.address}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            Phone: <br></br>
            <input
              type='text' 
              name='phone' 
              placeholder='phone'
              value={props.phone}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            City: <br></br>
            <input
              type='text' 
              name='city' 
              placeholder='city'
              value={props.city}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            State: <br></br>
            <input
              type='text' 
              name='state' 
              placeholder='state'
              value={props.state}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            Zipcode: <br></br>
            <input
              type='text' 
              name='zipcode' 
              placeholder='zipcode'
              value={props.zipcode}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          
          <button type='submit' >addPrison</button>
        </form>
        </Title>
      </FormContainer>
    </MainContainer>
  )
};

const mapStateToProps = state => {
  return {
    prison: state.prison,
  }
}
export default connect(
  mapStateToProps, 
  {addPrison})(CC_AddPrison);