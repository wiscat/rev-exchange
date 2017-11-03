/* @flow */

import { combineReducers } from 'redux';
import { DEFAULT_CURRENCY } from '../conf';
import {
  UPDATE_AMOUNT, UPDATE_CURRENCY_FROM, UPDATE_CURRENCY_TO, UPDATE_RATE, FETCH_RATES_SUCCESS
} from './actions';

function currencyFrom(state = DEFAULT_CURRENCY, action) {
  switch (action.type) {
    case UPDATE_CURRENCY_FROM:
      return action.currency;
    default:
      return state;
  }
}

function currencyTo(state = DEFAULT_CURRENCY, action) {
  switch (action.type) {
    case UPDATE_CURRENCY_TO:
      return action.currency;
    default:
      return state;
  }
}

function amountFrom(state = 0, action) {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return action.amount;
    case UPDATE_CURRENCY_FROM:
      return 0;
    default:
      return state;
  }
}

function amountTo(state = 0, action) {
  switch (action.type) {
    case UPDATE_RATE:
    case UPDATE_AMOUNT: {
      const amount = action.amount * action.rate;
      return amount ? amount.toFixed(2) : 0;
    }
    case UPDATE_CURRENCY_FROM:
      return 0;
    default:
      return state;
  }
}

function wallet(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function rate(state = 0, action) {
  switch (action.type) {
    case UPDATE_RATE:
      return action.rate;
    default:
      return state;
  }
}

function rates(state = {}, action) {
  switch (action.type) {
    case FETCH_RATES_SUCCESS:
      return action.response.rates || state;
    default:
      return state;
  }
}

function available(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  rates,
  rate,
  currencyFrom,
  currencyTo,
  amountFrom,
  amountTo,
  wallet,
  available,
});
