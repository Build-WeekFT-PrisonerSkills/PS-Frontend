import React from 'react';

const GetPrison = props => {
  return (
    <div>
      <div className='person'>
        <p>{props.prison.id}</p>
        <p>{props.prison.prisonName}</p>
      </div>
    </div>
  );
};

export default GetPrison;
