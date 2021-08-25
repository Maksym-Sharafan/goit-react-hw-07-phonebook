import { useSelector, useDispatch } from 'react-redux';
import { allActions, allSelectors } from 'redux/phonebook';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(allSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeValue = e => dispatch(allActions.changeFilter(e.target.value));

  return (
    <div className={styles.filter__wrapper}>
      <label className={styles.filter__label}>
        Find contacts by name
        <input
          className={styles.filter__input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeValue}
        />
      </label>
    </div>
  );
};

export default Filter;
