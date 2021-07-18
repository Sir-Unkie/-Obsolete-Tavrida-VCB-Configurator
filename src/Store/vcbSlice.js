import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Customization: {
    adjustedOptions: [
      { 0: '' },
      { 1: 'No; 6NO+6NC aux contacts' },
      { 2: 'No; 1NO+1NC aux contacts' },
    ],
    blocks: [
      [],
      [{ 'Main low terminal design': [6] }],
      [{ 'Main low terminal design': [1, 2, 3, 4, 5] }],
    ],
  },
  'Rated voltage': {
    adjustedOptions: [
      { 0: '' },
      { 1: '12 kV' },
      { 2: '17,5 kV' },
      { 3: '17,5 kV Capacitive' },
    ],
    blocks: [
      [],
      [
        { 'Rated short circuit breaking current': [2] },
        { 'Main low terminal design': [5] },
        { Language: ['A', 'B', 'C', 'D', 'E', 'F'] },
      ],
      [
        { 'Rated short circuit breaking current': [2] },
        { 'Pole center distance': [1, 2] },
        { 'Main low terminal design': [5] },
        { Language: ['A', 'B', 'C', 'D', 'E', 'F'] },
      ],
      [
        { 'Rated short circuit breaking current': [1] },
        { 'Pole center distance': [1, 2] },
        { 'Main low terminal design': [1, 2, 3, 4] },
        { Language: [1, 2, 4, 5, 7, 8] },
      ],
    ],
  },
  'Rated short circuit breaking current': {
    adjustedOptions: [{ 0: '' }, { 1: '20 kA' }, { 2: '16 kA' }],
    blocks: [
      [],
      [{ 'Rated voltage': [3] }, { 'Main low terminal design': [5] }],
      [
        { 'Rated voltage': [1, 2] },
        { 'Main low terminal design': [1, 2, 3, 4] },
      ],
    ],
  },
  'Rated normal current': {
    adjustedOptions: [{ 0: '' }, { 1: '800 A' }],
    blocks: [[], []],
  },
  'Pole center distance': {
    adjustedOptions: [
      { 0: '' },
      { 1: '150 mm' },
      { 2: '180 mm' },
      { 3: '210 mm' },
    ],
    blocks: [
      [],
      [{ 'Rated voltage': [2, 3] }, { 'Main low terminal design': [2, 3, 5] }],
      [
        { 'Rated voltage': [2, 3] },
        { 'Main low terminal design': [1, 3, 4, 5] },
      ],
      [{ 'Main low terminal design': [1, 2, 4] }],
    ],
  },
  'Main low terminal design': {
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
      [],
      [
        { Customization: [2] },
        { 'Rated voltage': [3] },
        { 'Rated short circuit breaking current': [2] },
        { 'Pole center distance': [2, 3] },
      ],
      [
        { Customization: [2] },
        { 'Rated voltage': [3] },
        { 'Rated short circuit breaking current': [2] },
        { 'Pole center distance': [1, 3] },
      ],
      [
        { Customization: [2] },
        { 'Rated voltage': [3] },
        { 'Rated short circuit breaking current': [2] },
        { 'Pole center distance': [1, 2] },
      ],
      [
        { Customization: [2] },
        { 'Rated voltage': [3] },
        { 'Rated short circuit breaking current': [2] },
        { 'Pole center distance': [2, 3] },
      ],
      [
        { Customization: [2] },
        { 'Rated voltage': [1, 2] },
        { 'Rated short circuit breaking current': [1] },
        { 'Pole center distance': [1, 2] },
      ],
      [{ Customization: [1] }],
    ],
  },
  'CM settings': {
    adjustedOptions: [
      { 0: '' },
      { 1: 'Basic circuit breaker functionality' },
      { 2: 'Without CM' },
    ],
    blocks: [
      [],
      [{ 'Rated auxiliary supply voltage': [3] }],
      [{ 'Rated auxiliary supply voltage': [1, 2] }],
    ],
  },
  'Rated auxiliary supply voltage': {
    adjustedOptions: [
      { 0: '' },
      { 1: '24-60 V DC' },
      { 2: '110-220 V AC/DC' },
      { 3: 'Without CM' },
    ],
    blocks: [
      [],
      [{ 'CM settings': [2] }, { Language: [2, 3, 5, 6, 8, 9, 'B', 'D', 'F'] }],
      [{ 'CM settings': [2] }, { Language: [1, 3, 4, 6, 7, 9, 'A', 'C', 'E'] }],
      [
        { 'CM settings': [1] },
        { Language: [1, 2, 4, 5, 7, 8, 'A', 'B', 'C', 'D', 'E', 'F'] },
      ],
    ],
  },
  Language: {
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
      [],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [2, 3] }],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [1, 3] }],
      [{ 'Rated auxiliary supply voltage': [1, 2] }],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [2, 3] }],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [1, 3] }],
      [{ 'Rated auxiliary supply voltage': [1, 2] }],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [2, 3] }],
      [{ 'Rated voltage': [3] }, { 'Rated auxiliary supply voltage': [1, 3] }],
      [{ 'Rated auxiliary supply voltage': [1, 2] }],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [2, 3] },
      ],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [1, 3] },
      ],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [2, 3] },
      ],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [1, 3] },
      ],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [2, 3] },
      ],
      [
        { 'Rated voltage': [1, 2] },
        { 'Rated auxiliary supply voltage': [1, 3] },
      ],
    ],
  },
};

export const vcbSlice = createSlice({
  name: 'vcb',
  initialState,
  reducers: {
    changed: (state, action) => {
      //   lets get a new adjustedOptions array

      //   then lets get an array of options to delete
      const del = state[action.payload.par].blocks[action.payload.value];

      del.forEach(parameter => {
        Object.values(parameter).forEach(par => {
          //   state['Customization'][item] = item;
          par.forEach(item => {
            const index = state[
              Object.keys(parameter)[0]
            ].adjustedOptions.findIndex(elem => {
              return Object.keys(elem)[0] == item;
            });
            state[Object.keys(parameter)[0]].adjustedOptions.splice(index, 1);
          });
        });
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changed } = vcbSlice.actions;

export default vcbSlice.reducer;
