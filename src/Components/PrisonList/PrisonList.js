import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

import Prisons from './Prisons';

const PrisonList = () => {
  const [prison, setPrison] = useState([]);
  const [getResult, setResult] = useState('');

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(res => {
        // console.log(res.data);
        setPrison(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className='prisonList'>
        {prison.map(prison => (
          <Link to={`/api/users/${prison.id}`}>
            <div>
              <Prisons prison={prison} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PrisonList;
