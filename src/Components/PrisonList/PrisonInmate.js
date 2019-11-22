import React from 'react';

import {Container, Inmate, People} from './GetPrisonerStyled/PrisonInmateStyled';
const PrisonInmate = props => {
  return (
    <Container>
      <Inmate>
        <People>
          <h5>First Name: {props.inmate.inmateFirstName}</h5>
          <h5>Last Name: {props.inmate.inmateLastName}</h5>
          <h5>Skill set: {props.inmate.skillset}</h5>
        </People>
      </Inmate>
    </Container>
  );
};
export default PrisonInmate;
