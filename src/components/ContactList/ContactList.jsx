import React from "react";
import { useDispatch } from "react-redux";
import { delContact } from "redux/slices";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul className={ css.list }>
      {contacts.map(({ id, name, number }) => (
        <li
          className={ css.item }
          key={ id }>
          <span>{ name }: { number }</span>
          <button
            type="button"
            onClick={ () => dispatch(delContact(id)) }
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
    number: PropTypes.string.isRequired,
  })),
}
