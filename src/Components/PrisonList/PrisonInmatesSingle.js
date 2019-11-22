import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';
import {Single, Container} from './GetPrisonerStyled/PrisonInmatesSingleStyles';
function PrisonInmatesSingle(props) {
  const [inmate, setInmate] = useState([]);

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/inmates/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setInmate(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 style={{textAlign: 'center'}}>Personal Information</h2>
      <Container>
        <Single>
          <p>First Name: {inmate.inmateFirstName}</p>
          <p>Last Name: {inmate.inmateLastName}</p>
          <p>Skill Set: {inmate.skillset}</p>
          <p>Work Experience: {inmate.workExperience}</p>
        </Single>
      </Container>
    </>
  );
}

export default PrisonInmatesSingle;
