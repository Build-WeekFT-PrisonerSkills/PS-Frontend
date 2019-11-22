import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';

import Prisons from './Prisons';
import {PrisonListStyle, Title, SearchBar, Container} from './GetPrisonerStyled/PrisonListStyled';

const PrisonList = () => {
  const [prisons, setPrisons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(res => {
        console.log('Data : ', res.data);

        const characters = res.data.filter(character =>
          character.prisonName.toLowerCase().includes(search.toLowerCase())
        );
        console.log(characters);

        setPrisons(characters);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <NavBarOther />
      <h2 style={{textAlign: 'center'}}>Welcome to the prison list</h2>
      <SearchBar>
        <form>
          <input
            type='text'
            autoComplete='off'
            name='search'
            value={search}
            placeholder='search....'
            onChange={changeHandler}
          />
        </form>
      </SearchBar>
      <PrisonListStyle>
        {prisons.map(prison => (
          <Link to={`/prisonProfile/${prison.id}`}>
            <div>
              <Prisons prison={prison} />
            </div>
          </Link>
        ))}
      </PrisonListStyle>
    </Container>
  );
};

export default PrisonList;
