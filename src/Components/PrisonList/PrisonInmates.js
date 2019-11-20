import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import PrisonInmate from './PrisonInmate';

const PrisonInmates = props => {
  const [inmates, setInmates] = useState([]);

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${props.match.params.id}/inmates`)
      .then(res => {
        console.log(res.data);
        setInmates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to prisonInmates</h2>
      <Link to={`/employeeProfile/${props.match.params.id}`}>
        {inmates.map(inmate => {
          return <PrisonInmate key={inmates.id} inmate={inmate} />;
        })}
      </Link>
    </div>
  );
};

export default PrisonInmates;
