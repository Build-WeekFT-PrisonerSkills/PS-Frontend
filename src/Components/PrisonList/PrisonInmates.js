import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {NavBarOther} from '../NavBarOther';
import PrisonInmate from './PrisonInmate';
import {Container, Inmate} from './GetPrisonerStyled/PrisonInMatesStyled';

const PrisonInmates = props => {
  const [inmates, setInmates] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${props.match.params.id}/inmates`)
      .then(res => {
        setInmates(search);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBarOther />

      <h2 style={{textAlign: 'center', marginTop: '50px'}}>List of Prison Inmates</h2>
      <Container>
        <Inmate>
          {inmates.map(inmate => {
            return (
              <Link to={`/employeeProfile/${inmate.id}`}>
                <PrisonInmate key={inmates.id} inmate={inmate} {...props} />;
              </Link>
            );
          })}
        </Inmate>
      </Container>
    </>
  );
};

export default PrisonInmates;
