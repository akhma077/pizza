import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFoodBlockType } from 'types/types';
import { IFoodBlockSlice, Status } from './types';

export const fetchData = createAsyncThunk<IFoodBlockType[], Record<string, string>>(
  'food/fetchDataStatus',
  async (params) => {
    const { search, category, page, sortProperty } = params;
    const MOCK_API = `https://63030cc49eb72a839d77f1d2.mockapi.io/foodapi?${page}&limit=4&${category}&${sortProperty}&order=asc${search}`;
    const { data } = await axios.get<IFoodBlockType[]>(MOCK_API);
    return data;
  },
);

const initialState: IFoodBlockSlice = {
  items: [],
  status: Status.LOADING,
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = foodSlice.actions;
export default foodSlice.reducer;
