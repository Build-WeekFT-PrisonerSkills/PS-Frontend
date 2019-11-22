import React from 'react';

import {Container, Inmate, People} from './GetPrisonerStyled/PrisonInmateStyled';
const PrisonInmate = props => {
  return (
    <Container>
      <Inmate>
        <People>
          <h6>First Name: {props.inmate.inmateFirstName}</h6>
          <h6>Last Name: {props.inmate.inmateLastName}</h6>
          <h6>Skill set: {props.inmate.skillset}</h6>
        </People>
      </Inmate>
    </Container>
  );
};
export default PrisonInmate;
