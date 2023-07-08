import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { isIncludeContact } from 'helpers/forContact';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        const name = action.payload.name;

        if (isIncludeContact(name, state)) {
          toast.error(`${name} is already in contacts`, {
            theme: 'colored',
          });
          return;
        }

        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(10),
            name: name.value,
            number: number.value,
          },
        };
      },
    },
    delContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
