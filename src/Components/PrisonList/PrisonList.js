import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';

import Prisons from './Prisons';
import {PrisonListStyle, Title} from './GetPrisonerStyled/PrisonListStyled';

const PrisonList = () => {
  const [prison, setPrison] = useState([]);
  const [getResult, setResult] = useState('');

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(res => {
        setPrison(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <NavBarOther/>
      <Title>Prison List</Title>
      <PrisonListStyle />

    </div>
  );
};

export default PrisonList;
