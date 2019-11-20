import React from 'react';

import {PrisonStyled, Container} from './GetPrisonerStyled/PrisonStyled';

const Prison = props => {
  return (
    <Container>
      <PrisonStyled>
        <p>ID: {props.prison.id}</p>
        <p>PrisonName: {props.prison.prisonName}</p>
      </PrisonStyled>
    </Container>
  );
};

export default Prison;
