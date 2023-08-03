import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { FoodBlock, Skeleton } from '../components/FoodBlock';
import { Pagination } from 'components/Pagination';
import { useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filter/slice';
import { useNavigate } from 'react-router';
import qs from 'qs';
import { fetchData } from 'redux/slices/food/slice';
import { Status } from 'redux/slices/food/types';
import { Error } from 'components/Error';
import { RootState, useAppDispatch } from 'redux/store';

export function Home() {
  const { categoryId, currentPage, searchValue, sort } = useSelector(
    (state: RootState) => state.filter,
  );

  const { items, status } = useSelector((state: RootState) => state.food);

  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     // const sortP = sortList.find((obj) => obj.sort === params.sort);

  //     dispatch(
  //       setFilters({
  //         ...params,
  //       }),
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  function getData() {
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const page = currentPage ? `page=${currentPage}` : '';
    const sortProperty = sort ? `sort=${sort.sort}` : '';

    dispatch(
      fetchData({
        search,
        category,
        page,
        sortProperty,
      }),
    );
  }

  React.useEffect(() => {
    getData();

    window.scrollTo(0, 0);
  }, [categoryId, searchValue, currentPage]);

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, currentPage]);

  const onChangeCategoty = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  function handleChangePage(num: number) {
    dispatch(setCurrentPage(num));
  }

  const foods = items.map((item) => <FoodBlock key={item.id} {...item} />);
  const skeletons = [...new Array(6).map((_, index) => <Skeleton key={index} />)];

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} setCategoryId={onChangeCategoty} />
        <Sort />
      </div>

      <h2 className="content__title">Меню</h2>
      {status === Status.ERROR ? (
        <Error />
      ) : (
        <div className="content__items">{status === Status.LOADING ? skeletons : foods}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={handleChangePage} />
    </>
  );
}
