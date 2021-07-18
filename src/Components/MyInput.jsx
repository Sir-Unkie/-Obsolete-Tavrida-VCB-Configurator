import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changed } from '../Store/vcbSlice';

const MyInput = ({ parName, options, value }) => {
  const vcbState = useSelector(state => state.vcb);
  const dispatch = useDispatch();
  const changeHandler = event => {
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(vcbState[event.target.name].blocks[event.target.value]);
    dispatch(changed({ par: event.target.name, value: event.target.value }));
    //   actualy here we must change the state and based on the state we need to pass options into the input component (not all the options from the initial data but adjusted options from the gloal state)
  };
  return (
    <select onChange={changeHandler} name={parName} value={value}>
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
