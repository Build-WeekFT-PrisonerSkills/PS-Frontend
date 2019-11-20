import React, {useState, useEffect} from "react";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
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

const CC_EditEmployee = (props) => {
  const [state, setState] = useState({
    age: '',
    available: 1,
    image: null,
    inmateFirstName: '',
    inmateLastName: '',
    prison_id: '',
    skillset: '',
    workExperience: '',
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.editEmployee(state);
    props.history.push('/dashboard');
  }
  return (
    <MainContainer>
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>Edit Employee</h1>
        <form onSubmit={onSubmit}>
          <FormEntry>
            <input
              type='text' 
              name='firstname' 
              placeholder='firstname'
              value={props.inmateFirstName}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='text' 
              name='lastname' 
              placeholder='lastname'
              value={props.inmateLastName}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='text' 
              name='age' 
              placeholder='age'
              value={props.age}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='number' 
              name='available' 
              placeholder='available'
              value={props.available}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='file' 
              name='image' 
              placeholder='image'
              value={props.image}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='number' 
              name='prison-id' 
              placeholder='prison-id'
              value={props.prison_id}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='text' 
              name='skillset' 
              placeholder='skillset'
              value={props.skillset}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='text' 
              name='work-experience' 
              placeholder='work-experience'
              value={props.workExperience}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <button type='submit' >Edit Employee</button>
        </form>
        </Title>
      </FormContainer>
    </MainContainer>
  )
};

export default CC_EditEmployee;