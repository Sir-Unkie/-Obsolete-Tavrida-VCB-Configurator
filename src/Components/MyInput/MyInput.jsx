import React from 'react';
import { useDispatch } from 'react-redux';
import { changed } from '../../Store/vcbSlice';
import styles from './MyInput.module.scss';

const MyInput = ({ parName, options, value }) => {
  const dispatch = useDispatch();
  const changeHandler = event => {
    dispatch(changed({ par: event.target.name, value: event.target.value }));
  };
  return (
    <div className={styles.customSelect}>
      <select
        onChange={changeHandler}
        name={parName}
        value={value}
        className={styles.selectField}
      >
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
    </div>
  );
};

export default MyInput;
