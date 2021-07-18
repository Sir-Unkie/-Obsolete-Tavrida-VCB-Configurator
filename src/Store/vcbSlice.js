import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Customization: {
    value: 0,
    options: [
      { 0: '' },
      { 1: 'No; 6NO+6NC aux contacts' },
      { 2: 'No; 1NO+1NC aux contacts' },
    ],
    adjustedOptions: [
      { 0: '' },
      { 1: 'No; 6NO+6NC aux contacts' },
      { 2: 'No; 1NO+1NC aux contacts' },
    ],
    blocks: [
      { 0: [] },
      { 1: [{ 'Main low terminal design': [6] }] },
      { 2: [{ 'Main low terminal design': [1, 2, 3, 4, 5] }] },
    ],
  },
  'Rated voltage': {
    value: 0,
    options: [
      { 0: '' },
      { 1: '12 kV' },
      { 2: '17,5 kV' },
      { 3: '17,5 kV Capacitive' },
    ],
    adjustedOptions: [
      { 0: '' },
      { 1: '12 kV' },
      { 2: '17,5 kV' },
      { 3: '17,5 kV Capacitive' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [
          { 'Rated short circuit breaking current': [2] },
          { 'Main low terminal design': [5] },
          { Language: ['A', 'B', 'C', 'D', 'E', 'F'] },
        ],
      },
      {
        2: [
          { 'Rated short circuit breaking current': [2] },
          { 'Pole center distance': [1, 2] },
          { 'Main low terminal design': [5] },
          { Language: ['A', 'B', 'C', 'D', 'E', 'F'] },
        ],
      },
      {
        3: [
          { 'Rated short circuit breaking current': [1] },
          { 'Pole center distance': [1, 2] },
          { 'Main low terminal design': [1, 2, 3, 4] },
          { Language: [1, 2, 4, 5, 7, 8] },
        ],
      },
    ],
  },
  'Rated short circuit breaking current': {
    value: 0,
    options: [{ 0: '' }, { 1: '20 kA' }, { 2: '16 kA' }],
    adjustedOptions: [{ 0: '' }, { 1: '20 kA' }, { 2: '16 kA' }],
    blocks: [
      { 0: [] },
      { 1: [{ 'Rated voltage': [3] }, { 'Main low terminal design': [5] }] },
      {
        2: [
          { 'Rated voltage': [1, 2] },
          { 'Main low terminal design': [1, 2, 3, 4] },
        ],
      },
    ],
  },
  'Rated normal current': {
    value: 0,
    options: [{ 0: '' }, { 1: '800 A' }],
    adjustedOptions: [{ 0: '' }, { 1: '800 A' }],
    blocks: [{ 0: [] }, { 1: [] }],
  },
  'Pole center distance': {
    value: 0,
    options: [{ 0: '' }, { 1: '150 mm' }, { 2: '180 mm' }, { 3: '210 mm' }],
    adjustedOptions: [
      { 0: '' },
      { 1: '150 mm' },
      { 2: '180 mm' },
      { 3: '210 mm' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [
          { 'Rated voltage': [2, 3] },
          { 'Main low terminal design': [2, 3, 5] },
        ],
      },
      {
        2: [
          { 'Rated voltage': [2, 3] },
          { 'Main low terminal design': [1, 3, 4, 5] },
        ],
      },
      { 3: [{ 'Main low terminal design': [1, 2, 4] }] },
    ],
  },
  'Main low terminal design': {
    value: 0,
    options: [
      { 0: '' },
      { 1: 'One main lower terminal for PCD 150 mm' },
      { 2: 'One main lower terminal for PCD 180 mm' },
      { 3: 'One main lower terminal for PCD 210 mm' },
      { 4: 'Two main lower terminals for PCD 150 mm' },
      { 5: 'One main lower terminal for PCD 210 mm (Capacitive)' },
      { 6: 'One main lower terminal for PCD 210 mm (1NO+1NC)' },
    ],
    adjustedOptions: [
      { 0: '' },
      { 1: 'One main lower terminal for PCD 150 mm' },
      { 2: 'One main lower terminal for PCD 180 mm' },
      { 3: 'One main lower terminal for PCD 210 mm' },
      { 4: 'Two main lower terminals for PCD 150 mm' },
      { 5: 'One main lower terminal for PCD 210 mm (Capacitive)' },
      { 6: 'One main lower terminal for PCD 210 mm (1NO+1NC)' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [
          { Customization: [2] },
          { 'Rated voltage': [3] },
          { 'Rated short circuit breaking current': [2] },
          { 'Pole center distance': [2, 3] },
        ],
      },
      {
        2: [
          { Customization: [2] },
          { 'Rated voltage': [3] },
          { 'Rated short circuit breaking current': [2] },
          { 'Pole center distance': [1, 3] },
        ],
      },
      {
        3: [
          { Customization: [2] },
          { 'Rated voltage': [3] },
          { 'Rated short circuit breaking current': [2] },
          { 'Pole center distance': [1, 2] },
        ],
      },
      {
        4: [
          { Customization: [2] },
          { 'Rated voltage': [3] },
          { 'Rated short circuit breaking current': [2] },
          { 'Pole center distance': [2, 3] },
        ],
      },
      {
        5: [
          { Customization: [2] },
          { 'Rated voltage': [1, 2] },
          { 'Rated short circuit breaking current': [1] },
          { 'Pole center distance': [1, 2] },
        ],
      },
      { 6: [{ Customization: [1] }] },
    ],
  },
  'CM settings': {
    value: 0,
    options: [
      { 0: '' },
      { 1: 'Basic circuit breaker functionality' },
      { 2: 'Without CM' },
    ],
    adjustedOptions: [
      { 0: '' },
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
    value: 0,
    options: [
      { 0: '' },
      { 1: '24-60 V DC' },
      { 2: '110-220 V AC/DC' },
      { 3: 'Without CM' },
    ],
    adjustedOptions: [
      { 0: '' },
      { 1: '24-60 V DC' },
      { 2: '110-220 V AC/DC' },
      { 3: 'Without CM' },
    ],
    blocks: [
      { 0: [] },
      {
        1: [
          { 'CM settings': [2] },
          { Language: [2, 3, 5, 6, 8, 9, 'B', 'D', 'F'] },
        ],
      },
      {
        2: [
          { 'CM settings': [2] },
          { Language: [1, 3, 4, 6, 7, 9, 'A', 'C', 'E'] },
        ],
      },
      {
        3: [
          { 'CM settings': [1] },
          { Language: [1, 2, 4, 5, 7, 8, 'A', 'B', 'C', 'D', 'E', 'F'] },
        ],
      },
    ],
  },
  Language: {
    value: 0,
    options: [
      { 0: '' },
      { 1: 'English (for 24-60 V DC auxiliary supply voltage)' },
      { 2: 'English (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 3: 'English (Without CM)' },
      { 4: 'Spanish (for 24-60 V DC auxiliary supply voltage)' },
      { 5: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 6: 'Spanish (Without CM)' },
      { 7: 'Portuguese (for 24-60 V DC auxiliary supply voltage)' },
      { 8: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 9: 'Portuguese (Without CM)' },
      { A: 'English (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      { B: 'English (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB' },
      { C: 'Spanish (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      { D: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB' },
      { E: 'Portuguese (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      {
        F: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB',
      },
    ],
    adjustedOptions: [
      { 0: '' },
      { 1: 'English (for 24-60 V DC auxiliary supply voltage)' },
      { 2: 'English (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 3: 'English (Without CM)' },
      { 4: 'Spanish (for 24-60 V DC auxiliary supply voltage)' },
      { 5: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 6: 'Spanish (Without CM)' },
      { 7: 'Portuguese (for 24-60 V DC auxiliary supply voltage)' },
      { 8: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage)' },
      { 9: 'Portuguese (Without CM)' },
      { A: 'English (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      { B: 'English (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB' },
      { C: 'Spanish (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      { D: 'Spanish (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB' },
      { E: 'Portuguese (for 24-60 V DC auxiliary supply voltage) 17,5C VCB' },
      {
        F: 'Portuguese (for 110-220 V AC/DC auxiliary supply voltage) 17,5C VCB',
      },
    ],
    blocks: [
      { 0: [] },
      {
        1: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        2: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
      { 3: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
      {
        4: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        5: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
      { 6: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
      {
        7: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        8: [
          { 'Rated voltage': [3] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
      { 9: [{ 'Rated auxiliary supply voltage': [1, 2] }] },
      {
        A: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        B: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
      {
        C: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        D: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
      {
        E: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [2, 3] },
        ],
      },
      {
        F: [
          { 'Rated voltage': [1, 2] },
          { 'Rated auxiliary supply voltage': [1, 3] },
        ],
      },
    ],
  },
};

export const vcbSlice = createSlice({
  name: 'vcb',
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

      //   del.forEach(parameter => {
      //     Object.values(parameter).forEach(par => {
      //       //   state['Customization'][item] = item;
      //       par.forEach(item => {
      //         const index = state[
      //           Object.keys(parameter)[0]
      //         ].adjustedOptions.findIndex(elem => {
      //           return Object.keys(elem)[0] === item.toString();
      //         });
      //         state[Object.keys(parameter)[0]].adjustedOptions.splice(index, 1);
      //       });
      //     });
      //   });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changed } = vcbSlice.actions;

export default vcbSlice.reducer;
