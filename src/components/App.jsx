import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from './App.module.css';
import { getContacts, getFilter } from "redux/selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const filteredData = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm/>

      {contacts.length
        ? ( <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={filteredData} />
        </> )
        : <h2>No contacts</h2>}

      <ToastContainer autoClose={3000}/>
    </div>
  );
};
