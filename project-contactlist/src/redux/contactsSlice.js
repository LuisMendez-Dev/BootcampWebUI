import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      const maxId = state.contacts.reduce(
        (max, contact) => Math.max(max, contact.id || 0),
        0
      );
      const idNewContact = maxId + 1;
      const randomProfilePhoto =
        'https://xsgames.co/randomusers/avatar.php?g=male';

      const newContact = {
        id: idNewContact,
        avatar: randomProfilePhoto,
        ...action.payload,
      };

      state.contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
});

export const { setContacts, addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
