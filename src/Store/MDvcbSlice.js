import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Customization: {
    value: '0',
    options: [
      { 0: 'Not set' },
      { 1: 'No customization' },
      { 2: 'AG16 customization' },
      { 3: 'VSI customization' },
      { 4: 'LMx customization' },
    ],
    adjustedOptions: [
      { 0: 'Not set' },
      { 1: 'No customization' },
      { 2: 'AG16 customization' },
      { 3: 'VSI customization' },
      { 4: 'LMx customization' },
    ],
    blocks: [
      { 0: [] },
      { 1: [] },
      { 2: [{ 'Pole center distance': [2] }] },
      { 3: [{ 'Pole center distance': [2] }] },
      { 4: [{ 'Pole center distance': [2] }] },
    ],
  },
  'Rated voltage': {
    value: '0',
    options: [{ 0: 'Not set' }, { 1: '17,5 kV' }],
    adjustedOptions: [{ 0: 'Not set' }, { 1: '17,5 kV' }],
    blocks: [{ 0: [] }, { 1: [] }],
  },
  'Rated short circuit breaking current': {
    value: '0',
    options: [{ 0: 'Not set' }, { 1: '31.5 kA' }],
    adjustedOptions: [{ 0: 'Not set' }, { 1: '31.5 kA' }],
    blocks: [{ 0: [] }, { 1: [] }],
  },
  'Rated normal current': {
    value: '0',
    options: [{ 0: 'Not set' }, { 1: '1250 A' }],
    adjustedOptions: [{ 0: 'Not set' }, { 1: '1250 A' }],
    blocks: [{ 0: [] }, { 1: [] }],
  },
  'Pole center distance': {
    value: '0',
    options: [{ 0: 'Not set' }, { 1: '150 mm' }, { 2: '210 mm' }],
    adjustedOptions: [{ 0: 'Not set' }, { 1: '150 mm' }, { 2: '210 mm' }],
    blocks: [
      { 0: [] },
      {
        1: [],
      },
      {
        2: [{ Customization: [2, 3, 4] }],
      },
    ],
  },
  'Main low terminal design': {
    value: '0',
    options: [{ 0: 'Not set' }, { 1: 'One main lower terminal' }],
    adjustedOptions: [{ 0: 'Not set' }, { 1: 'One main lower terminal' }],
    blocks: [{ 0: [] }, { 1: [] }],
  },
  'CM settings': {
    value: '0',
    options: [
      { 0: 'Not set' },
      { 1: 'Basic circuit breaker functionality' },
      { 2: 'Without CM' },
    ],
    adjustedOptions: [
      { 0: 'Not set' },
      { 1: 'Basic circuit breaker functionality' },
      { 2: 'Without CM' },
    ],
    blocks: [
      { 0: [] },
      { 1: [{ 'Rated auxiliary supply voltage': [3] }] },
      { 2: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
    ],
  },
  'Rated auxiliary supply voltage': {
    value: '0',
    options: [
      { 0: 'Not set' },
      { 1: '24-60 V DC' },
      { 2: '110-220 V AC/DC' },
      { 3: 'Without CM' },
    ],
    adjustedOptions: [
      { 0: 'Not set' },
      { 1: '24-60 V DC' },
      { 2: '110-220 V AC/DC' },
      { 3: 'Without CM' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [{ 'CM settings': [2] }, { Language: [2, 3, 5, 6, 8, 9] }],
      },
      {
        2: [{ 'CM settings': [2] }, { Language: [1, 3, 4, 6, 7, 9] }],
      },
      {
        3: [{ 'CM settings': [1] }, { Language: [1, 2, 4, 5, 7, 8] }],
      },
    ],
  },
  Language: {
    value: '0',
    options: [
      { 0: 'Not set' },
      { 1: 'English (for 24-60 V DC auxiliary supply voltage)' },
      { 2: 'English (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 3: 'English (Without CM)' },
      { 4: 'Spanish (for 24-60 V DC auxiliary supply voltage)' },
      { 5: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 6: 'Spanish (Without CM)' },
      { 7: 'Portuguese (for 24-60 V DC auxiliary supply voltage)' },
      { 8: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 9: 'Portuguese (Without CM)' },
    ],
    adjustedOptions: [
      { 0: 'Not set' },
      { 1: 'English (for 24-60 V DC auxiliary supply voltage)' },
      { 2: 'English (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 3: 'English (Without CM)' },
      { 4: 'Spanish (for 24-60 V DC auxiliary supply voltage)' },
      { 5: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 6: 'Spanish (Without CM)' },
      { 7: 'Portuguese (for 24-60 V DC auxiliary supply voltage)' },
      { 8: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 9: 'Portuguese (Without CM)' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [{ 'Rated auxiliary supply voltage': [2, 3] }],
      },
      {
        2: [{ 'Rated auxiliary supply voltage': [1, 3] }],
      },
      { 3: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
      {
        4: [{ 'Rated auxiliary supply voltage': [2, 3] }],
      },
      {
        5: [{ 'Rated auxiliary supply voltage': [1, 3] }],
      },
      { 6: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
      {
        7: [{ 'Rated auxiliary supply voltage': [2, 3] }],
      },
      {
        8: [{ 'Rated auxiliary supply voltage': [1, 3] }],
      },
      { 9: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
    ],
  },
};

export const MDvcbSlice = createSlice({
  name: 'MDvcb',
  initialState,
  reducers: {
    changed: (state, action) => {
      // set to initial state all the adjusted options
      Object.keys(state).forEach(parameter => {
        state[parameter].adjustedOptions = [...state[parameter].options];
      });
      //   change the value of changed parameter
      state[action.payload.par].value = action.payload.value;
      //   run a loop to check each paramter value and if value is not equal to 0 then we should update the state

      Object.values(state).forEach(parameter => {
        if (parameter.value !== 0) {
          //   here we must modify the adjusted options for each such parameter
          //   lets get the array of parameters to block
          const blocksArray = parameter.blocks;
          const paramsToAdjust = blocksArray.find(elem => {
            return parameter.value === Object.keys(elem)[0];
          });

          const arrayOfParamsToDelete = Object.values(paramsToAdjust)[0];

          arrayOfParamsToDelete.forEach(param => {
            Object.values(param)[0].forEach(blockedOption => {
              const index = state[
                Object.keys(param)[0]
              ].adjustedOptions.findIndex(option => {
                return Object.keys(option)[0] === blockedOption.toString();
              });
              if (index !== -1) {
                state[Object.keys(param)[0]].adjustedOptions.splice(index, 1);
              }
            });
          });
        }
      });
    },
    clear: state => {
      // set to initial state all the adjusted options
      Object.keys(state).forEach(parameter => {
        state[parameter].adjustedOptions = [...state[parameter].options];
      });
      //   clear all values
      Object.values(state).forEach(parameter => {
        parameter.value = '0';
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changed, clear } = MDvcbSlice.actions;

export default MDvcbSlice.reducer;
