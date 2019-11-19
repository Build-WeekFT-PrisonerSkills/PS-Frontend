import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PrisonInMates = () => {
  const [inMates, setInmates] = (useState = []);

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/')
      .then(res => {
        console.log(res.data);
        setInmates(console.log(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to prisonInmates</h2>
    </div>
  );
};

export default PrisonInMates;
