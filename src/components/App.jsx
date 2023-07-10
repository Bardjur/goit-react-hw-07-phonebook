import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from './App.module.css';
import { getContacts, getFilter } from "redux/selectors";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const { contacts, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizeFilter = filter.toLowerCase();
  const filteredData = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>

      <ContactForm/>

      {isLoading ? <div className={css.centered}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>

      : contacts.length
        ? ( <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={filteredData} 
            />
        </> )
        : <h2>No contacts</h2>}

      <ToastContainer autoClose={3000}/>
    </div>
  );
};
