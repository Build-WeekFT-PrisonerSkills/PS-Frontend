import React from 'react';

const PrisonInmate = props => {
  return (
    <div>
      <h5>First Name: {props.inmate.inmateFirstName}</h5>
      <h5>Last Name{props.inmate.inmateLastName}</h5>
      <h5>ID: {props.inmate.id}</h5>
      <h5>SkillSet: {props.inmate.skillset}</h5>
    </div>
  );
};
export default PrisonInmate;
