import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PrisonInmatesSingle(props) {
  const [inmate, setInmate] = useState([]);

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/inmates/${props.match.parmas.id}`)
      .then(res => {
        console.log(res.data);
        setInmate(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.id]);

  return (
    <div>
      <h2>Welcome to single party</h2>
    </div>
  );
}

export default PrisonInmatesSingle;
