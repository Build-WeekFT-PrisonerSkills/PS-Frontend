//inmate/employee list goes here:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import "../ComponentStyles/styles.css";
import "../ComponentStyles/styles-custom.css";

export const EmployeeListPage = (props) => {
  const [inmateList, setInmateList] = useState([]);
  const prisonId = parseInt(props.match.params.id)

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${prisonId}/inmates`)
      .then(res => {
        console.log(res.data)
        setInmateList(res.data)
      })
      .catch(error => {
        console.log('axios get inmates error: ', error);
      })
  }, []);

  console.log(prisonId)
  return (
      <>
        <h1>Employees at {prisonId}</h1>
          {inmateList.map(item => (
              <div key={item.id} className="inmateCard">
                <h2>{item.inmateFirstName} {item.inmateLastName}</h2>
                <div key={item.id}>
                  <p>Age: {item.age}</p>
                  <p>Available: {item.available}</p>
                  <p>Skills: {item.skillset}</p>
                  <p>Experience: {item.workExperience}</p>
                </div>
              </div>
            )
          )}
      </>
    );
};