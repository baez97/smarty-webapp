import { CombinedState, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { constants } from '../constants';
import { ISmartphone } from '../models/smartphone.model';

export interface ISmartphoneSliceState {
  loadingSmartphones: boolean,
  loadingBestSellers: boolean,
  smartphoneHasErrors: boolean,
  bestSellersHasErrors: boolean,
  smartphones: Array<ISmartphone>,
  smartphoneSearch: { query: string, results: Array<ISmartphone> },
  bestSellers: Array<string>
}

export const initialState: ISmartphoneSliceState = {
  loadingSmartphones: false,
  loadingBestSellers: false,
  smartphoneHasErrors: false,
  bestSellersHasErrors: false,
  smartphones: new Array<ISmartphone>(),
  smartphoneSearch: { query: '', results: new Array<ISmartphone>() },
  bestSellers: new Array<string>()
};

const smartphonesSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    getSmartphones: (state) => {
      state.loadingSmartphones = true;
    },
    searchSmartphones: (state, { payload }) => {
      const regexp = new RegExp(payload.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      state.smartphoneSearch.query = payload;
      if (payload.length > 0) {
        state.smartphoneSearch.results = state.smartphones.filter(iSmartphone => regexp.test(iSmartphone.name));
      } else {
        state.smartphoneSearch.results = [];
      }
    },
    getBestSellers: (state) => {
      state.loadingBestSellers = true;
    },
    getSmartphonesSuccess: (state, { payload }) => {
      state.smartphones = payload;
      state.loadingSmartphones = false;
      state.smartphoneHasErrors = false;
    },
    getBestSellersSuccess: (state, { payload }) => {
      state.bestSellers = payload;
      state.loadingBestSellers = false;
      state.bestSellersHasErrors = false;
    },
    getSmartphonesFailure: (state) => {
      state.loadingSmartphones = false;
      state.smartphoneHasErrors = true;
    },
    getBestSellersFailure: (state) => {
      state.loadingBestSellers = false;
      state.bestSellersHasErrors = true;
    }
  }
});

export const {
  getSmartphones,
  getBestSellers,
  getSmartphonesSuccess,
  getBestSellersSuccess,
  getSmartphonesFailure,
  getBestSellersFailure,
  searchSmartphones
} = smartphonesSlice.actions;

export const smartphonesSelector = (state: CombinedState<{ smartphones: ISmartphoneSliceState }>) => state.smartphones;

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

export function fetchBestSellers() {
  return async (dispatch: any) => {
    dispatch(getBestSellers());

    try {
      const { data } = await axios.get(`${constants.BACKEND_URL}/device/best-sellers`);
      dispatch(getBestSellersSuccess(data));
    } catch {
      dispatch(getBestSellersFailure());
    }
  }
}
