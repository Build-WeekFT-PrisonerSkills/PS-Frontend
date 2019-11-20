import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {NavBarOther} from '../NavBarOther';
import PrisonInmate from './PrisonInmate';

const PrisonInmates = props => {
  const [inmates, setInmates] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
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
    <>
    <NavBarOther/>
    <div>
      <h2>Welcome to prisonInmates</h2>

      {inmates.map(inmate => {
        return (
          <>
          
          <Link to={`/employeeProfile/${inmate.id}`}>
            <PrisonInmate key={inmates.id} inmate={inmate} {...props} />;
          </Link>
          </>
        );
      })}
    </div>
    </>
  );
};
// <Link to={`prisonInmates/${prison.id}`}>

export default PrisonInmates;
