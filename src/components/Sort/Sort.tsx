import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filter/slice';
import { RootState } from 'redux/store';

export const sortList = [
  { name: 'популярности', sort: 'rating' },
  { name: 'цене', sort: 'price' },
  { name: 'алфавиту', sort: 'title' },
];

export const Sort: React.FC = React.memo(() => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement | null>(null);

  function handleClickOutSide(event: MouseEvent) {
    const composedPath = event.composedPath();

    if (sortRef.current && !composedPath.includes(sortRef.current)) {
      setIsVisible(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleClickOutSide);
    return () => document.body.removeEventListener('click', handleClickOutSide);
  }, []);

  const dispatch = useDispatch();
  const { name, sort } = useSelector((state: RootState) => state.filter.sort);

  console.log(sort);

  const toggleSorting = (obj: any) => {
    setIsVisible(false);
    dispatch(setSort(obj));
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, idx) => (
              <li
                key={idx}
                onClick={() => toggleSorting(obj)}
                className={sort.sort === obj.sort ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
