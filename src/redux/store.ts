import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filter/slice';
import cart from './slices/cart/slice';
import food from './slices/food/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    food,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
