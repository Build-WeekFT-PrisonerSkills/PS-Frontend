import React from 'react';
import {Link} from 'react-router-dom';

const Prison = props => {
  return (
    <div>
      <p>ID: {props.prison.id}</p>
      <p>PrisonName: {props.prison.prisonName}</p>
    </div>
  );
};

export default Prison;
