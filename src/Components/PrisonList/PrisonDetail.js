import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
    <div>
      <h3>Welcome to the PrisonDetail</h3>
      <p>The PrisonName: {details.prisonName}</p>
      <p>The City: {details.city}</p>
      <Link to={`/api/users/${props.match.params.id}/inmates`}>
        <button>Show more</button>
      </Link>
    </div>
  );
};

export default PrisonDetail;
