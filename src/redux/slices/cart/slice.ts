import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { CartItemType, IcartSlice } from './types';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { getCartFromLS } from 'utils/getCartFromLS';

const initialState: IcartSlice = getCartFromLS();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    onDecrement(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
        // state.totalCount = state.items.reduce((sum, item) => item.count + sum, 0);
      }
    },

    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems, onDecrement } = cartSlice.actions;
export default cartSlice.reducer;
