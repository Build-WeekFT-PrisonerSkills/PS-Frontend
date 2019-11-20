import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PrisonInmatesSingle(props) {
  const [inmate, setInmate] = useState([]);

  console.log(props);
  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/inmates/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setInmate(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to single party</h2>
      <h3>Where is the data</h3>
      {inmate.age}
    </div>
  );
}

export default PrisonInmatesSingle;
