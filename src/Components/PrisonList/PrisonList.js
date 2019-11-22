import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';

import Prisons from './Prisons';
import {PrisonListStyle, Title} from './GetPrisonerStyled/PrisonListStyled';

const PrisonList = () => {
  const [prisons, setPrisons] = useState([]);
  const [getResult, setResult] = useState('');

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(res => {
        setPrisons(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <PrisonListStyle>
      {prisons.map(prison => (
        <Link to={`/prisonProfile/${prison.id}`}>
          <div>
            <Prisons prison={prison} />
          </div>
        </Link>
      ))}
    </PrisonListStyle>
  );
};

export default PrisonList;
