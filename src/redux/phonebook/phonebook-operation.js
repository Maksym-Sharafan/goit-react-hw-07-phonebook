import axios from 'axios';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContact };
