import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";

export const CC_EmployeeProfile = (props) => {
  const [inmateList, setInmateList] = useState([]);
  const inmateId = parseInt(props.match.params.id)

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/inmates/${inmateId}`)
      .then(res => {
        console.log(res.data)
        setInmateList(res.data)
      })
      .catch(error => {
        console.log('axios get inmates error: ', error);
      })
  }, []);

  return (
      <>
              <div key={inmateList.id} className="inmateCard">
                <h2>{inmateList.inmateFirstName} {inmateList.inmateLastName}</h2>
                <div key={inmateList.id}>
                  <p>Skills: {inmateList.skillset}</p>
                  <p>Age: {inmateList.age}</p>
                  <p>Available: {inmateList.available}</p>
                  <p>Image: {inmateList.image}</p>
                  <p>Experience: {inmateList.workExperience}</p>
                </div>
              </div>
      </>
    );
};