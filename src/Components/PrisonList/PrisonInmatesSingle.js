import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavBarOther} from '../NavBarOther';
function PrisonInmatesSingle(props) {
  const [inmate, setInmate] = useState([]);

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
    <>
 
    <div>
      <div className='single'>
        <p>First Name: {inmate.inmateFirstName}</p>
        <p>Last Name: {inmate.inmateLastName}</p>
        <p>Skill Set: {inmate.skillset}</p>
        <p>Work Experience: {inmate.workExperience}</p>
      </div>
    </div>
    </>
  );
}

export default PrisonInmatesSingle;
