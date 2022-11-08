import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState ="";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {value: filtersInitialState},
    reducers:
     { 
      setFilter(state, actions) {
        state.value = actions.payload;
      },
  },
  });

  export const {filterContact} = filterSlice.actions;
 
  export default filterSlice.reducer;