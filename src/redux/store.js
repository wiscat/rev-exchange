/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';
import api from '../redux/api';
import { DEFAULT_CURRENCY } from '../conf';

import type { Wallet, Rates, MainProps } from '../types';

export type State = {
  currencyFrom: string,
  currencyTo: string,
  amountFrom: number,
  amountTo: number,
  wallet: Wallet,
  rate: number,
  rates: Rates,
  available: string[],
};

export const initState = (props: MainProps): State => ({
  currencyFrom: props.from || DEFAULT_CURRENCY,
  currencyTo: props.to || DEFAULT_CURRENCY,
  amountFrom: 0,
  amountTo: 0,
  wallet: props.wallet || {
    [DEFAULT_CURRENCY]: 0
  },
  rate: 0,
  rates: {},
  available: props.available || [],
});

export const configureStore = (props: MainProps) => createStore(reducer, initState(props), applyMiddleware(thunk, api));
