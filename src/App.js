import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import phonebookOperation from './redux/phonebook/phonebook-operation';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContact());
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
