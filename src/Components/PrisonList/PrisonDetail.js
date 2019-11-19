import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      <button>Show more</button>
    </div>
  );
};

export default PrisonDetail;
