import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';
import {Single, Container, Bg} from './GetPrisonerStyled/PrisonInmatesSingleStyles';
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
    <Bg>
      <NavBarOther />
      <h2 style={{textAlign: 'center'}}>Personal Information</h2>
      <Container>
        <Single>
          <h5>First Name:</h5>
          <p> {inmate.inmateFirstName}</p>
          <h5>Last Name: </h5>
          <p>{inmate.inmateLastName}</p>
          <h6>Skill Set: </h6>
          <p>{inmate.skillset}</p>
          <h6>Work Experience: </h6>
          <p>{inmate.workExperience}</p>
        </Single>
      </Container>
    </Bg>
  );
}

export default PrisonInmatesSingle;
