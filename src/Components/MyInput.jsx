import React from 'react';

const MyInput = ({ parName, options }) => {
  const changeHandler = event => {
    console.log(event.target.value);
    console.log(event.target.name);
    //   actualy here we must change the state and based on the state we need to pass options into the input component (not all the options from the initial data but adjusted options from the gloal state)
  };
  return (
    <select onChange={changeHandler} name={parName}>
      {options.map(option => {
        return Object.keys(option).map(key => {
          return (
            <option key={key} value={key}>
              {option[key]}
            </option>
          );
        });
      })}
    </select>
  );
};

export default MyInput;
