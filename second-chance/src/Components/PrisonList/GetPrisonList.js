import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import GetPrisons from './GetPrisons';

const GetPrisonList = () => {
  const [getPrison, setPrison] = useState([]);

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
        {getPrison.map(prison => {
          return <GetPrisons key={prison.id} prison={prison} />;
        })}
      </div>
    </div>
  );
};

export default GetPrisonList;
