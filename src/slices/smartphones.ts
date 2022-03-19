import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { constants } from '../constants';
import { ISmartphone } from '../models/smartphone.model';

export interface ISmartphoneSliceState {
  loading: boolean,
  hasErrors: boolean,
  smartphones: Array<ISmartphone>
}

export const initialState: ISmartphoneSliceState = {
  loading: false,
  hasErrors: false,
  smartphones: new Array<ISmartphone>()
};

const smartphonesSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    getSmartphones: (state) => {
      state.loading = true;
    },
    getSmartphonesSuccess: (state, { payload }) => {
      state.smartphones = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSmartphonesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const { getSmartphones, getSmartphonesSuccess, getSmartphonesFailure } = smartphonesSlice.actions;

export const smartphonesSelector = (state: any) => state.smartphones;

export default smartphonesSlice.reducer;

export function fetchSmartphones() {
  return async (dispatch: any) => {
    dispatch(getSmartphones());

    try {
      const { data } = await axios.get(`${constants.BACKEND_URL}/device/all`);
      dispatch(getSmartphonesSuccess(data));
    } catch {
      dispatch(getSmartphonesFailure());
    }
  }
}