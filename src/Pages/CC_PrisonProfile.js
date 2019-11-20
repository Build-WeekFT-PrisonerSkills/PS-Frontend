import React, {useState, useEffect} from 'react';

import {axiosWithAuth} from '../Utils/axiosWithAuth';
import {Link} from 'react-router-dom';

const CC_PrisonProfile = props => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    axiosWithAuth()
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
    <div>
      <h3>Welcome to your Prison Profile</h3>
      <p>The PrisonName: {details.prisonName}</p>
      <p>The City: {details.city}</p>
      <Link to={`/editPrison/${details.id}/employees`}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};

export default CC_PrisonProfile;
