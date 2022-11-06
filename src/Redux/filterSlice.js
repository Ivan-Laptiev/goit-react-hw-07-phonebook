import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState ="";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {value: filtersInitialState},
    reducers:
     { 
      setFilter(state, actions) {
        state.value = actions.payload;
      },
  },
  });

  export const {setFilter} = filterSlice.actions;
 
  export default filterSlice.reducer;