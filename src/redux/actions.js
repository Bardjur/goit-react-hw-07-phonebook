import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(10),
      name: name.value,
      number: number.value,
    },
  };
};

export const delContact = id => {
  return {
    type: 'contacts/delContact',
    payload: id,
  };
};

export const filterChange = text => {
  return {
    type: 'filter/filterChange',
    payload: text,
  };
};
