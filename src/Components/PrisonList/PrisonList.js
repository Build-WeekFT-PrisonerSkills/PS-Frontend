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
        console.log(res.data);
        setPrisons(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 style={{textAlign: 'center'}}>Welcome to the prison list</h2>
      <PrisonListStyle>
        {prisons.map(prison => (
          <Link to={`/prisonProfile/${prison.id}`}>
            <div>
              <Prisons prison={prison} />
            </div>
          </Link>
        ))}
      </PrisonListStyle>
    </>
  );
};

export default PrisonList;
