import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from "redux/selectors";
import { filterChange } from 'redux/slices';
import css from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
   }

  return (
    <label className={css['input-wrap']}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="find contacts by name"
        required
        value={filter}
        onChange={handleChange}
      />
    </label>
  )
}
