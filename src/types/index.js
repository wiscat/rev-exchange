/* @flow */

import type { State } from '../redux/store';

export type { Store, Dispatch, Action } from 'redux';
export type { State };
export type Wallet = { [key: string]: number };
export type Rates = { [key: string]: number };
export type GetState = () => State;
export type MainProps = {
  styles: boolean,
  colorStart: string,
  colorStop: string,
  width: number,
  height: number,
  baseFontSize: number,
  syncInterval: number,
  from: string,
  to: string,
  wallet: Wallet,
  available: string[],
  onChangeState: Function,
  onClickRates: Function,
  onCancel: Function,
  onExchange: Function,
  openexchangeratesAppId: string,
};
