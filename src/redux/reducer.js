import { isIncludeContact } from 'helpers/forContact';
import { combineReducers } from 'redux';
import { toast } from 'react-toastify';

const contactsState = [];

const contactsReducer = (state = contactsState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      const name = action.payload.name;

      if (isIncludeContact(name, state)) {
        toast.error(`${name} is already in contacts`, {
          theme: 'colored',
        });
        return state;
      }

      return [...state, action.payload];
    }

    case 'contacts/delContact': {
      return state.filter(item => item.id !== action.payload);
    }

    default:
      return state;
  }
};

const filterState = '';

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'filter/filterChange': {
      return action.payload;
    }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
