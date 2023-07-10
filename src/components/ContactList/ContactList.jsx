import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul className={ css.list }>
      {contacts.map(({ id, name, phone }) => (
        <li
          className={ css.item }
          key={ id }>
          <span>{ name }: { phone }</span>
          <button
            type="button"
            onClick={ () => dispatch(deleteContact(id)) }
          >delete</button>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })),
}
