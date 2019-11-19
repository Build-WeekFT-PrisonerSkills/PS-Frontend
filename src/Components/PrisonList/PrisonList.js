import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

import GetPrisons from './Prisons';

const PrisonList = () => {
  const [getPrison, setPrison] = useState([]);
  const [getResult, setResult] = useState('');

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(res => {
        console.log(res.data);
        setPrison(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className='prisonList'>
        {getPrison.map(prison => (
          <GetPrisons prison={prison} />
        ))}
      </div>
    </div>
  );
};

export default PrisonList;
