import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import { addContact } from "redux/operations";
import { getContacts } from 'redux/selectors';
import { isIncludeContact } from 'helpers/forContact';

export default function ContactForm() {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (isIncludeContact(name.value, contacts)) {
      toast.error(`${name.value} is already in contacts`, {
        theme: 'colored',
      });
      return
    }

    dispatch(addContact({
      name:name.value, 
      phone: number.value }));

      e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label className={css['input-wrap']}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css['input-wrap']}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  )
}
