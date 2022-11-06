import { createSlice } from '@reduxjs/toolkit';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

 const contactSlice = createSlice({
  name: 'contacts',
    initialState: { items: contactList },  
    reducers: {       
    addContact(state, actions) {
        state.items.push(actions.payload);
    },
        
    deleteContact(state, actions) {
      state.items = state.items.filter(item => item.id !== actions.payload);
    },
  },
});

export const { addContact, deleteContact} = contactSlice.actions;

export default contactSlice.reducer;