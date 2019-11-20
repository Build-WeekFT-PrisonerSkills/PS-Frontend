import React, {useState, useEffect} from "react";
import styled  from "@emotion/styled";
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";
import {addEmployee} from '../Actions/authAction';
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

const CC_AddEmployee = (props) => {
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
    props.addEmployee(state);
    props.history.push('/dashboard');
  }
  return (
    <MainContainer>
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>addEmployee</h1>
        <form onSubmit={onSubmit}>
          <FormEntry>
            First Name: <br></br>
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
            Last Name: <br></br>
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
            Age: <br></br>
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
            Available: <br></br>
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
            Image: <br></br>
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
            Prison ID: <br></br>
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
            SkillSet: <br></br>
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
            Work Experience: <br></br>
            <input
              type='text' 
              name='work-experience' 
              placeholder='work-experience'
              value={props.workExperience}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <button type='submit' >addEmployee</button>
        </form>
        </Title>
      </FormContainer>
    </MainContainer>
  )
};

const mapStateToProps = state => {
  return {
    employee: state.employee,
  }
}
export default connect(
  mapStateToProps, 
  {addEmployee})(CC_AddEmployee);





//WALTERS FORM WORKS GREAT, just couldn't get it to work with my redux... not smart enough lol

//addEmployee Form
// import React, {useEffect} from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import styled  from "@emotion/styled";
// import "../ComponentStyles/styles.css";
// import "../ComponentStyles/styles-custom.css";
// import { axiosWithAuth } from "../Utils/axiosWithAuth";


// const StyledErrorMessage = styled.p`
//   color: red;
//   margin: 10px;
// `

// const MainContainer = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   background: #fff;
// `

// const FormEntry = styled.div`
//   margin: 20px;
// `
// const ImgContainer = styled.div`
//   margin: 0 auto;
// `
// const FormContainer = styled.div`
//   margin: 0 auto;
// `

// const Title = styled.h1`
//   font-family: Lato;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 48px;
//   line-height: 58px;
//   /* identical to box height */
//   text-align: center;
//   color: #000000;
// `

// const CC_AddEmployee = ({ values, status, errors, touched, setUserToken, isSubmitting}) => {
//   useEffect(() => {
//     if (status) {
//       setUserToken(status)
//     }
//   }, [status])

//   return (
//     <MainContainer>

//     <ImgContainer>
//       <img src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9' style={{width: '30rem'}}alt='electricion working on lines' />
//     </ImgContainer>
//     <FormContainer>
//       <Form>
//           <Title>addEmployee</Title>
//           <FormEntry>
//             <Field className='addEmployeeEntry' type='email' name='email' placeholder='Email' />
//             {touched.email && errors.email && (<StyledErrorMessage>{errors.email}</StyledErrorMessage>)}
//           </FormEntry>
//           <FormEntry>
//             <Field className='addEmployeeEntry' type='password' name='password' placeholder='Password' />
//             {touched.password && errors.password && (<StyledErrorMessage>{errors.password}</StyledErrorMessage>)}
//           </FormEntry>
//           <button type='submit'>addEmployee</button>
//       </Form>
//     </FormContainer>
//     </MainContainer>
//   )
// };

// const FormikCC_AddEmployee = withFormik({
//   mapPropsToValues({email, password}) {
//     return {
//       email: email || '',
//       password: password || ''
//     };
//   },

//   validationSchema: Yup.object().shape({
//     email: Yup.string().required('Must Enter a email'),
//     password: Yup.string().required('Must Enter a Password')
//   }),

//   handleSubmit(values, {setStatus}) {
    
//     // axiosWithAuth()
//     //   .post('/api/auth/addEmployee', values)
//     //   .then(res =>{
//     //     console.log(res);
//     //     setStatus(res.data);
//     //   })
//     //   .catch(err => console.log(err.res));
//   }
// })(CC_AddEmployee);

// export default FormikCC_AddEmployee

// Add Employee Form WALTERS BELOW Works great just couldn't get it to work with redux

// import React from "react";
// import { Formik, Form, useField } from "formik";
// import * as Yup from "yup";
// import styled  from "@emotion/styled";
// import "../ComponentStyles/styles.css";
// import "../ComponentStyles/styles-custom.css";
// import {Link} from 'react-router-dom';
// import { axiosWithAuth } from "../Utils/axiosWithAuth";

// const MyTextInput = ({ label, ...props }) => {

//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// export const CC_AddEmployee = () => {
//   return (
//     <>
//       <h1>Add a New Employee</h1>
//       <Formik
//         initialValues={{
//           inmateFirstName: "",
//           inmateLastName: "",
//           prison_id: "",
//           skillset: "",
//           age: "",
//           workExperience: "",
//           image: "",
//           available: ""
//         }}
//         validationSchema={Yup.object({
//           inmateFirstName: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           inmateLastName: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           prison_id: Yup.string()
//             .required("Required"),
//           skillset: Yup.string()
//             .required("Required"),
//           age: Yup.string()
//             .required("Required"),
//           workExperience: Yup.string()
//             .required("Required"),
//           image: Yup.string()
//             .required("Required"),
//           available: Yup.string()
//             .required("Required")
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//           axiosWithAuth()
//           .post('/api/users/inmates', values)
//           .then(res =>{
//             console.log(res);
//             setSubmitting(res.data);
//           })
//           .catch(err => console.log(err.res));
//         }}
//       >
//         <Form>
//           <MyTextInput
//             label="First Name"
//             name="inmateFirstName"
//             type="text"
//             placeholder="First Name"
//           />
//           <MyTextInput
//             label="Last Name"
//             name="inmateLastName"
//             type="text"
//             placeholder="Last Name"
//           />
//           <MyTextInput
//             label="Prison ID"
//             name="prison_id"
//             type="text"
//             placeholder="Prison ID"
//           />
//           <MyTextInput
//             label="Skillset"
//             name="skillset"
//             type="text"
//             placeholder="Skills"
//           />
//           <MyTextInput
//             label="Age"
//             name="age"
//             type="text"
//             placeholder="Age"
//           />
//           <MyTextInput
//             label="Work Experience"
//             name="workExperience"
//             type="text"
//             placeholder="Work Experience (Years)"
//           />
//           <MyTextInput
//             label="Image"
//             name="image"
//             type="text"
//             placeholder="URL to Image"
//           />
//           <MyTextInput
//             label="Available"
//             name="available"
//             type="text"
//             placeholder="0 or 1"
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </>
//   );
// };


