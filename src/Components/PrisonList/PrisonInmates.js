import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import PrisonInmate from './PrisonInmate';

const PrisonInmates = props => {
  const [inmates, setInmates] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${props.match.params.id}/inmates`)
      .then(res => {
        // console.log(res.data);
        setInmates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.params.id]);

  return (
    <div>
      <div className='prisonList'>
        {inmates.map(inmate => (
          <Link to={`/prisonInmates/${inmate.id}`}>
            <div>
              <PrisonInmate inmate={inmate} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
// <Link to={`prisonInmates/${prison.id}`}>

export default PrisonInmates;
