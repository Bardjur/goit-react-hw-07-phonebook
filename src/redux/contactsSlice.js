import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
  isLoading: false,
  error: null,
  contacts: [],
};

const handlePending = state => ({
  ...state,
  isLoading: true,
})

const handleReject = (state, action) => {
  toast.error(action.payload);

  return {...state,
  isLoading: false,
  contacts: [],
  error: action.payload,}
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    //fetch
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action){
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      }
    },
    [fetchContacts.rejected]: handleReject,

    //add
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action){
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, action.payload]
      }
    },
    [addContact.rejected]: handleReject,

    //delete
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action){
      const {id, name} = action.payload;
      toast.success(`${name} is deleted`);

      return {
        ...state,
        isLoading: false,
        contacts: state.contacts.filter(item => item.id !== id)
      }
    },
    [deleteContact.rejected]: handleReject,

  }
})

export const contactsReducer = contactsSlice.reducer;