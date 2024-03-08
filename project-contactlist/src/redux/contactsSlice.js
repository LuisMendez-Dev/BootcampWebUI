import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RANDOM_PROFILE_PHOTO } from '../utils/constants';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    favorites: [],
  },
  reducers: {
    setContacts: (state, action) => {
      const contactsWithoutFavorites = action.payload.filter(
        (contact) => contact.isFavorite === false
      );
      state.contacts = contactsWithoutFavorites;
    },

    addToContacts: (state, action) => {
      const randomProfilePhoto = RANDOM_PROFILE_PHOTO;

      const newContact = {
        id: Date.now(), // Unique ID
        avatar: randomProfilePhoto,
        ...action.payload,
      };

      state.contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    deleteContact: (state, action) => {
      const contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

      const favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      );

      state.contacts = contacts;
      state.favorites = favorites;

      localStorage.setItem('contacts', JSON.stringify(state.contacts));
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },

    addToFavorites: (state, action) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );

      if (contactIndex >= 0) {
        const contactToAdd = {
          ...state.contacts[contactIndex],
          isFavorite: true,
        };

        state.favorites.push(contactToAdd);
        state.contacts.splice(contactIndex, 1);

        localStorage.setItem('contacts', JSON.stringify(state.contacts));
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },

    removeFromFavorites: (state, action) => {
      const contactToRemove = state.favorites.find(
        (contact) => contact.id === action.payload
      );

      if (contactToRemove) {
        contactToRemove.isFavorite = false;

        state.contacts.push(contactToRemove);
        state.favorites = state.favorites.filter(
          (contact) => contact.id !== action.payload
        );

        localStorage.setItem('contacts', JSON.stringify(state.contacts));
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
  },
});

// UNOPTIMIZED SELECTOR:
// !TODO: Optimize the selector to prevent unnecessary re-renders
/*
Even though the contacts and favorites in the Redux state have not changed, 
each call to the selector creates a new array with new object references, 
which causes React to think that the data has changed and thus triggers a new rendering
*/
export const allContactsSelector = (state) => {
  const contacts = state.contacts.contacts;
  const favorites = state.contacts.favorites;
  const allContacts = [];

  favorites.forEach((favoriteContact) => {
    allContacts.push({ ...favoriteContact, isFavorite: true });
  });

  contacts.forEach((contact) => {
    const isFavorite = favorites.some(
      (favoriteContact) => favoriteContact.id === contact.id
    );
    if (!isFavorite) {
      allContacts.push({ ...contact, isFavorite: false });
    }
  });

  return allContacts;
};

export const {
  setContacts,
  addToContacts,
  addToFavorites,
  removeFromFavorites,
  deleteContact,
} = contactsSlice.actions;
export default contactsSlice.reducer;
