import React from 'react';

import {PrisonStyled, Container} from './GetPrisonerStyled/PrisonStyled';

const Prison = props => {
  return (
    <Container>
      <PrisonStyled>
        <h5>Prison Name: {props.prison.prisonName}</h5>

        <h6>State : {props.prison.state}</h6>
      </PrisonStyled>
    </Container>
  );
};

export default Prison;
