/* @flow */

import { CALL_API } from '../redux/api';
import { currencyFromSelector, currencyToSelector, ratesSelector, amountFromSelector, rateSelector } from './selectors';
import type { Dispatch, GetState } from '../types';

export const UPDATE_CURRENCY_FROM = 'UPDATE_CURRENCY_FROM';
export const UPDATE_CURRENCY_TO = 'UPDATE_CURRENCY_TO';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_RATE = 'UPDATE_RATE';

export const FETCH_RATES = 'FETCH_RATES';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_FAILURE = 'FETCH_RATES_FAILURE';

const calcRate = (state) => {
  // calc current currency rate based on USD rates
  // as free plan of openexchangerates.org allow us to use only USD as base currency
  const from = currencyFromSelector(state);
  const to = currencyToSelector(state);
  const rates = ratesSelector(state);

  const rateFrom = rates[from.toUpperCase()] || 0;
  const rateTo = rates[to.toUpperCase()] || 0;

  if (!rateTo || !rateFrom) {
    return 0;
  }

  const usdFrom = 1.0 / rateFrom;
  return rateTo * usdFrom;
};

export const updateRate = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  dispatch({
    type: UPDATE_RATE,
    rate: calcRate(state),
    amount: amountFromSelector(state)
  });
};

export const setFromCurrency = (currency: string) => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_CURRENCY_FROM,
    currency,
  });

  dispatch(updateRate());
};

export const setFromAmount = (amount: number) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  dispatch({
    type: UPDATE_AMOUNT,
    amount,
    rate: rateSelector(state),
  });
};

export const setToCurrency = (currency: string) => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_CURRENCY_TO,
    currency,
  });

  dispatch(updateRate());
};

export const fetchCurrencies = (appId: string) => (dispatch: Dispatch) => {
  dispatch({
    [CALL_API]: {
      types: [FETCH_RATES, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE],
      endpoint: `https://openexchangerates.org/api/latest.json?app_id=${appId}`,
    }
  }).then(() => {
    dispatch(updateRate());
  });
};

