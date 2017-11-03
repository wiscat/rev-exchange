/* @flow */

import type { State } from '../types';

export const currencyFromSelector = (state: State) => state.currencyFrom;
export const currencyToSelector = (state: State) => state.currencyTo;
export const amountFromSelector = (state: State) => state.amountFrom;
export const amountToSelector = (state: State) => state.amountTo;
export const walletSelector = (state: State) => state.wallet;
export const rateSelector = (state: State) => state.rate;
export const ratesSelector = (state: State) => state.rates;
export const availableSelector = (state: State) => state.available;
