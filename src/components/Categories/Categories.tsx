import React from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesPropsType = {
  value: number;
  setCategoryId: (id: number) => void;
};

export const Categories: React.FC<CategoriesPropsType> = React.memo(({ value, setCategoryId }) => {
  useWhyDidYouUpdate('Categories', { value, setCategoryId });
  const categories: string[] = ['Все', 'Пиццы', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setCategoryId(idx)}
            className={value === idx ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});
