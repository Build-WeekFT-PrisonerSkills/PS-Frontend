import React, {useState, useEffect} from 'react';

const CC_EditPrison = () => {
  const [state, setState] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    contactPhone: ''
  });

  const changeHandler = e => {
    setState({...state, [e.target.name]: e.target.value});
    console.log([e.target.name], e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      contactPhone: ''
    });
  };
  return (
    <div>
      <p>Welcome to edit a person form</p>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={changeHandler} value={state.name} />

        <label htmlFor='name'>Address</label>
        <input type='text' name='address' onChange={changeHandler} value={state.address} />

        <label htmlFor='name'>City</label>
        <input type='text' name='city' onChange={changeHandler} value={state.city} />

        <label htmlFor='name'>State</label>
        <input type='text' name='state' onChange={changeHandler} value={state.state} />

        <label htmlFor='name'>Zipcode</label>
        <input type='text' name='zipcode' onChange={changeHandler} value={state.zipcode} />

        <label htmlFor='name'>Contact Phone</label>
        <input
          type='text'
          name='contactPhone'
          onChange={changeHandler}
          value={state.contactPhone}
        />
      </form>
    </div>
  );
};

export default CC_EditPrison;
