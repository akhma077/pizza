import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/slices/filter/slice';

import styles from './search.module.scss';

export function Search() {
  const [value, setValue] = React.useState<string>('');

  const dispatch = useDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event);
  };

  return (
    <input
      type="search"
      placeholder="Поиск..."
      className={styles.root}
      value={value}
      onChange={onChangeInput}
    />
  );
}
