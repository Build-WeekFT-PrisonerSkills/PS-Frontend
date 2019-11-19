import React from 'react';
import {Link} from 'react-router-dom';

const Prison = props => {
  console.log(props.prisonName);
  return (
    <div>
      {/* {<p>{props.prison.prisonName}</p>} */}

      {props.prison.id !== undefined ? (
        <Link to={`/api/users/${props.prison.id}`}>
          <p>{props.prison.id}</p>
          <p>{props.prison.prisonName}</p>
        </Link>
      ) : null}
      {console.log(props.prison.id)}
    </div>
  );
};

export default Prison;
