import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      {inmates.map(inmate => {
        return <PrisonInmate key={inmates.id} inmate={inmate} />;
      })}
    </div>
  );
};

export default PrisonInmates;
