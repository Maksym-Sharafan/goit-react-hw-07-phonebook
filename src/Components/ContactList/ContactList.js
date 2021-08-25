import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { allOperations, allSelectors } from 'redux/phonebook';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredEl = useSelector(allSelectors.getVisibleContacts);
  const loading = useSelector(allSelectors.getLoading);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(allOperations.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {loading && (
        <div className={styles.Loader}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {filteredEl.map(contact => (
        <li className={styles.contactList__item} key={contact.id}>
          {contact.name} {contact.number}
          <button
            className={styles.contactList__button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
