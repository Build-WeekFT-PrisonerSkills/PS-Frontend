import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {Container, PrisonDetails, Bg} from './GetPrisonerStyled/PrisonDetailStyled';

import {NavBarOther} from '../NavBarOther';

const PrisonDetail = props => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.params.id]);

  return (
    <>
      <NavBarOther />
      <Bg>
        <Container>
          <PrisonDetails>
            <h3>Welcome to the PrisonDetail</h3>
            <p>The PrisonName: {details.prisonName}</p>
            <p>Address: {details.address}</p>
            <p>State: {details.state}</p>
            <p>The City: {details.city}</p>
            <p>Contact Information: {details.phone}</p>

            <Link to={`/employeeList/${props.match.params.id}/employees`}>
              <button>Show more</button>
            </Link>
          </PrisonDetails>
        </Container>
      </Bg>
    </>
  );
};

export default PrisonDetail;
